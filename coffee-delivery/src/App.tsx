import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home/home";
import { theme } from "./styles/theme/theme";
import { Checkout } from "./pages/Checkout/checkout";
import { Header } from "./components/Header";
import { Success } from "./pages/Success/success";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/global";
import { CartContextProvider } from "./contexts/CartProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
