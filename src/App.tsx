import "./App.css";
// import { CartList } from "./Components/CartList";
import { ProducsList } from './Components/ProductsList';
// import { ShoopingList } from "./Components/ShoppingList";

// import { useCart } from "./Providers/Cart";
// import { useProducts } from "./Providers/Products";

function App() {
  // const {products} = useProducts();
  // const { cart, addProduct, deleteProduct } = useCart();

  return (
    <div className="App">
      <header className="App-header">
        <h2>Lista de produtos</h2>
        <ProducsList type={"shopping"} />
        {/* <ShoopingList /> */}
      </header>
      <h2>Carrinho de compras</h2>
      <ProducsList />
      {/* <CartList /> */}
    </div>
  );
}

export default App;
