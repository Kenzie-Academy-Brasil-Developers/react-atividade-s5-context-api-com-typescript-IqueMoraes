import { Product } from "../Product";

interface ProductsListProps {
    list: any;
    buttonText: string;
    buttonFunction: any;
}

interface Item {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}



export const ProducsList = ({ list, buttonText, buttonFunction }:ProductsListProps) => {

//   console.log(products, "aqui deveria ir a lista");

  return (
    <div>
        <ul style={{"display":"flex", "flexWrap":"wrap", "listStyle":"none"}}>
          {list?.map((item: Item) => (
            <li key={item.id} style={{"listStyle":"none"}}>
              <Product
                image={item.image}
                description={item.description}
                title={item.title}
                price={item.price}
                buttonText={buttonText}
                buttonFunction={buttonFunction(item)}
              />
            </li>
          ))}
        </ul>
      {/* {type === "shopping" ? (
        <ul>
          {products?.map((item) => (
            <li key={item.id}>
              <Product
                image={item.image}
                description={item.description}
                title={item.title}
                price={item.price}
                buttonText="Adicionar ao carrinho"
                buttonFunction={addProduct(item)}
              />{" "}
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {cart?.map((item) => (
            <li key={item.id}>
              <Product
                image={item.image}
                description={item.description}
                title={item.title}
                price={item.price}
                buttonText="Remover do carrinho"
                buttonFunction={deleteProduct(item)}
              />{" "}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};
