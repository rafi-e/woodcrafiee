import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, Home, Layout, ProductDetails, Shop } from "./router";
import { About } from "./screen/about/About";
import { Contact } from "./screen/contact/Contact";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
              <Home />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
              <Shop />
              </Layout>
            }
          />
          <Route
            path="/product-details/:productId"
            element={
              <Layout>
              <ProductDetails />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
              <CartPage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
              <About />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
              <Contact />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
