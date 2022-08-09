import { useState, useEffect, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { shopContext } from "../contexts/shopContext";

export default function Shop(props) {
  const context = useContext(shopContext);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div className="container p-5">
      <div className="d-flex justify-content-between">
        <Link to="/shop">Магазин</Link>
        <Link to="/shop/cart">В корзине: {context.getCartQuantity()}</Link>
      </div>
      <Outlet />
    </div>
  );
}
