import { Coffee, CurrencyDollar, MapPin, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { Container } from "./styles";
import { theme } from "../../styles/theme/theme";

type Props = {
  icon: "cart" | "timer" | "package" | "coffee" | "map_pin" | "dollar";
  color: "yellow-dark" | "yellow" | "base-subtitle" | "purple";
};

export function IconItem({ icon, color }: Props) {
  const renderIcon = () => {
    switch (icon) {
      case "cart":
        return <ShoppingCart size={22} weight="fill" color={theme.color["white"]}/>;
      case "timer":
        return <Timer size={22} weight="fill" color={theme.color["white"]} />;
      case "package":
        return <Package size={22} weight="fill" color={theme.color["white"]}/>;
      case "coffee":
        return <Coffee size={22} weight="fill" color={theme.color["white"]}/>;
      case "map_pin":
          return <MapPin size={22} weight="fill" color={theme.color["white"]}/>;
      case "dollar":
            return <CurrencyDollar size={22} weight="fill" color={theme.color["white"]}/>;
      default:
        return null;
    }
  };

  return <Container containercolor={color}>{renderIcon()}</Container>;
}
