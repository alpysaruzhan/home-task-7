import { Link, Outlet } from "react-router-dom";
import "./App.css";
import ComponentA from "./components/ComponentA";

function App() {
  return (
    <div className="App">
      {/* <h1>Bookkeeper</h1> */}

      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/invoices">Счета</Link> | <Link to="/shop">Магазин</Link> | <Link to="/contacts">Контакты</Link> | <Link to="/about">О нас</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
