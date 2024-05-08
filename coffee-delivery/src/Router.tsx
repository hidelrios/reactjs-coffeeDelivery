import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Checkout } from "./pages/Checkout/checkout";
import { Success } from "./pages/Success/success";
import { DefaultLayout } from "./layouts/defaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:orderId/success" element={<Success />} />
      </Route>
    </Routes>
  );
}
