import { Minus, Plus } from "@phosphor-icons/react";
import { theme } from "../../styles/theme/theme";
import { Container } from "./styles";

type Props = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
};

export function QuantityInput({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: Props) {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus size={22} color={theme.color.purple} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={22} color={theme.color.purple} />
      </button>
    </Container>
  );
}
