import store from "./app/store";
import "./App.css";
import { Provider } from "react-redux";
import Cart from "./features/cart/cart";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;