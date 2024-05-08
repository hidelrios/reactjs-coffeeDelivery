import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 38px;
  padding: 4px;
  gap: 4px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color["base-button"]};

  button {
    background-color: transparent;
    border: 0;
  }
`;
