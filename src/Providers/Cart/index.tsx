import { createContext, useContext, useState, ReactNode } from "react";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}
interface CartProps {
    children: ReactNode
}

interface CartProviderData{
    cart: Product[];
    addProduct: (product:Product) => void;
    deleteProduct: (product:Product) => void;

}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product:Product) => {
      if(!cart.includes(product)){
          setCart([...cart, product]);
        }
  };

  const deleteProduct = (productToBeDeleted:Product) => {
    const newCart = cart.filter(
      (item) => item.title !== productToBeDeleted.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ addProduct, deleteProduct, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
