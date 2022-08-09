import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import "./index.css";
import ColorState from "./contexts/colorContext";
import ShopState from "./contexts/shopContext";
import Invoices from "./routes/invoices";
import Invoice from "./routes/invoice";
import Shop from "./routes/shop";
import Products from "./routes/products";
import Contacts from "./routes/contacts";
import About from "./routes/about";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopState>
      <ColorState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="invoices" element={<Invoices />}>
                <Route
                  index
                  element={
                    <main style={{ padding: "1rem" }}>
                      <h3>Выберите счет</h3>
                    </main>
                  }
                />
                <Route path=":invoiceId" element={<Invoice />} />
              </Route>
              <Route path="shop" element={<Shop />}>
                <Route index element={<Products />} />
              </Route>
              <Route
                path="*"
                element={
                  <main>
                    <p>Извините, страница не найдена.</p>
                  </main>
                }
              />
              <Route path="contacts" element={<Contacts />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorState>
    </ShopState>
  </React.StrictMode>
);
