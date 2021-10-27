import { Product } from "../Product";
import { useCart } from "../../Providers/Cart";
import { useProducts } from "../../Providers/Products";

interface ProductsListProps {
    type?: string;
}


export const ProducsList = ({ type }:ProductsListProps) => {

const {addProduct, deleteProduct, cart } = useCart();
const { products } = useProducts();

  return (
    <div>
      {type === "shopping" ? (
        <ul>
          {products?.map((item) => (
            <li key={item.id}>
              <Product
                item={item}
                buttonText="Adicionar ao carrinho"
                buttonFunction={addProduct}
              />{" "}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {cart?.map((item) => (
            <li key={item.id}>
              <Product
               item={item}
                buttonText="Remover do carrinho"
                buttonFunction={deleteProduct}
              />{" "}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
