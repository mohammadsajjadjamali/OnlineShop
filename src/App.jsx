import { Navigate, Route, Routes } from "react-router-dom";
import CartProvider from "./context/CartContext";
import ProductsProvider from "./context/ProductContext";
import Layout from "./Layout/Layout";
import NotFound from "./pages/404";
import CheckoutPage from "./pages/CheckoutPage";
import DetailsPage from "./pages/DetailsPage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<DetailsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Layout>
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
