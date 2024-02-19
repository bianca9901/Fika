"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "@/lib/hooks";

type CartItem = {
  id: number;
  quantity: number;
  title: string;
  price: number;
  image: string

};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
};

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
});

export const useCart = () => useContext(CartContext);

type CartProviderProps = {
  children: ReactNode;
};

  export function CartProvider({ children }: CartProviderProps) {
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
      "shopping-cart",
      []
    )
  

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };  

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
