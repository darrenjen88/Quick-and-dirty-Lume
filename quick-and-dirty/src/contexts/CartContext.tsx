import React, {
  useState,
  Dispatch,
  SetStateAction,
  useContext,
  createContext,
} from "react";
import { ProductType } from "../types/types";

interface CartContextType {
  cart: ProductType[];
  setCart: Dispatch<SetStateAction<ProductType[]>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const CartContext = createContext<CartContextType>(
  {} as CartContextType
);

export const CartProvider: React.FC<ProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<ProductType[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  return { cart, setCart };
};
