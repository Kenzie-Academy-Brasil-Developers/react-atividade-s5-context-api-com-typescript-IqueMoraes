import { useCart } from "../../Providers/Cart";
import { useProducts } from "../../Providers/Products"
import { Product } from "../Product";


interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}


export const ShoopingList = () => {

//   console.log(products, "aqui deveria ir a lista");
const { products } = useProducts();
const { addProduct } = useCart();

  return (
    <div>
        <ul>
          {products?.map((item: Item) => (
            <li key={item.id}>
              <Product
                image={item.image}
                description={item.description}
                title={item.title}
                price={item.price}
                buttonText="Adicionar ao carrinho"
                buttonFunction={()=> addProduct(item)}
              />
            </li>
          ))}
        </ul>
     
    </div>
  );
};
