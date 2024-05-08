import styled from "styled-components";
import { theme } from "../../styles/theme/theme";

type ContainerProps = {
  containercolor: "yellow-dark" | "yellow" | "base-subtitle" | "purple";
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  padding: 8px;
  border-radius: 50%;
  background-color: ${({ containercolor }) =>
    theme.color[containercolor] || containercolor};
`;
