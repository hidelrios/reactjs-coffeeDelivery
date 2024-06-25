import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";
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
