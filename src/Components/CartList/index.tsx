import { useCart } from "../../Providers/Cart";
import { Product } from "../Product";


interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}


export const CartList = () => {

const { cart, deleteProduct } = useCart();

  return (
    <div>
        <ul>
          {cart?.map((item: Item) => (
            <li key={item.id}>
              <Product
                image={item.image}
                description={item.description}
                title={item.title}
                price={item.price}
                buttonText="Remover do carrinho"
                buttonFunction={()=>deleteProduct(item)}
              />
            </li>
          ))}
        </ul>
     
    </div>
  );
};
