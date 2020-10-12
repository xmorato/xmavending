import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import CoinPanel from "./components/coins/CoinPanel";
import ProductList from "./components/products/ProductList";
import { DisplayPanel } from "./components/display/DisplayPanel"
import { RoleSwitch } from "./components/RoleSwitch"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <DisplayPanel />
        <RoleSwitch />
        <ProductList />
        <CoinPanel />
      </Provider>
    </div>
  );
}

export default App;
