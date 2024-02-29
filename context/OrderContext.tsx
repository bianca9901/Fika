"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

/* 
- This context manages the accessibility of the /orderConfirmation page based
 on whether the user has successfully placed an order.

 - It controls whether the /orderConfirmation page can be accessed, ensuring it
 is only accessible after a successful order placement and never otherwise.
 */

// Shape of the OrderContext
type OrderContextType = {
  isOrderPlaced: boolean;
  markOrderPlaced: () => void;
};

// Props of the OrderProvider component
type OrderProviderProps = {
  children: ReactNode;
};

// Create a context for managing order placement state
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Custom hook to access the OrderContext within components
export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

// OrderProvider component responsible for managing order placement state
export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  // State to manage whether an order has been placed
  const [isOrderPlaced, setIsOrderPlaced] = useState<boolean>(false);

  // Function to mark order as placed
  const markOrderPlaced = () => {
    setIsOrderPlaced(true);
  };

  // Provide the cart context value to the children components
  return (
    <OrderContext.Provider value={{ isOrderPlaced, markOrderPlaced }}>
      {children}
    </OrderContext.Provider>
  );
};
