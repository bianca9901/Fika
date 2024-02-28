"use client";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

// Shape of a CartItem
type CartItem = {
  id: number;
  quantity: number;
  title: string;
  price: number;
  image: string;
};

// Shape of the CartContext
type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalSum: () => number;
  formattedCartItems: string;
  clearCart: () => void;
};

// Props of the CartProvider component
type CartProviderProps = {
  children: ReactNode; // Children elements that will be wrapped by the CartProvider
};

// Create a context for the cart
const CartContext = createContext<CartContextType | null>(null);

// Custom hook to access the cart context within components
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component responsible for managing the cart state
export function CartProvider({ children }: CartProviderProps) {
  // State to hold the cart items
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart items from localStorage when the component mounts
  // IMPORTANT for Next.js application: Ensures that localStorage is only accessed client-side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("shopping-cart");
      if (storedCartItems) {
        setCartItems(JSON.parse(storedCartItems));
      }
    }
  }, []);

  // Function to update localStorage with the current cart items
  const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("shopping-cart", JSON.stringify(items));
  };

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    // Check if the item already exists in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // If the item exists, increase its quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    } else {
      // If the item doesn't exist, add it to the cart
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      updateLocalStorage(updatedCartItems);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (id: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  // Function to decrease the quantity of an item in the cart
  const decreaseQuantity = (id: number) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  // Function to calculate the total sum of all items in the cart
  const calculateTotalSum = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Formats the cart items into a user-friendly string representing each item's quantity and title
  const formattedCartItems = cartItems
    .map((item) => `${item.quantity}x ${item.title}`)
    .join(", ");

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
    updateLocalStorage([]); // Clear localStorage as well
  };

  // Provide the cart context value to the children components
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalSum: calculateTotalSum,
        formattedCartItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
