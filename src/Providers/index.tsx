import { ReactNode } from "react";
import { CartProvider } from "./Cart"
import { ProductsProvider } from "./Products"

interface ProvidersProps {
    children: ReactNode
}

export const Providers = ({children}: ProvidersProps)=>{

    return (
        <ProductsProvider>
            <CartProvider>
                {children}
            </CartProvider>
        </ProductsProvider>
    )
}