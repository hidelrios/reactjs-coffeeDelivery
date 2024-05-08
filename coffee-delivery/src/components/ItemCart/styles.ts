import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const ContentPrice = styled.div`
  margin-top: -50px;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["textM"]};
`;

export const Price = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["textM"]};
  color: ${(props) => props.theme.color["base-subtitle"]};
  font-weight: bold;
`;

