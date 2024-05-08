import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color["base-button"]};
  padding: 6px;
  gap: 4px;
  border-radius: 8px;
  cursor: pointer;
  
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["buttonM"]};
  background-color: ${(props) => props.theme.color["base-button"]};
`;
