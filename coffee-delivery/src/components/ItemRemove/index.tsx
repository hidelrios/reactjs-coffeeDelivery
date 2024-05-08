import { Trash } from "@phosphor-icons/react";
import { Container, Title } from "./styles";
import { theme } from "../../styles/theme/theme";

type Props = {
  removeItem: () => void;
};
export function ItemRemove({ removeItem }: Props) {
  return (
    <Container onClick={removeItem}>
      <Trash size={18} color={theme.color.purple} />
      <Title>REMOVER</Title>
    </Container>
  );
}
