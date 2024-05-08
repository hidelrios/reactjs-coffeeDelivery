import { Actions, Cart, Container, Location } from "./styles";
import Logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { theme } from "../../styles/theme/theme";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();

  return (
    <Container>
      <Link to={"/"}>
        <img src={Logo} alt="" />
      </Link>

      <Actions>
        <Location>
          <MapPin size={22} weight="fill" color={theme.color["purple"]} />
          <span>Porto Alegre, RS</span>
        </Location>
        <Cart>
          <Link to={`checkout`} aria-disabled={cart.length === 0}>
            <ShoppingCart
              size={22}
              weight="fill"
              color={theme.color["yellow-dark"]}
            />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </Link>
        </Cart>
      </Actions>
    </Container>
  );
}
