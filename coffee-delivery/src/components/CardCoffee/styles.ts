import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 8px 50px 8px 50px;
  background-color: ${(props) => props.theme.color["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContentCoffee = styled.div`
  margin-top: -20px;
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0.5rem;
  gap: 0.5rem;

  div{
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["titleS"]};
  font-weight: 700;
  color: ${(props) => props.theme.color["base-subtitle"]};
`;

export const Description = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
  font-size: ${(props) => props.theme.font["font-size"]["textS"]};
  color: ${(props) => props.theme.color["base-label"]};
`;

export const ContentCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
  gap: 0.5rem;
`;

export const Price = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["titleM"]};
  color: ${(props) => props.theme.color["base-text"]};
  font-weight: 800;
  line-height: 1.3;
`;

export const Cart = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 4px;
  border-radius: 6px;
  border: 0;
  background-color: ${(props) => props.theme.color["purple-dark"]};
`;

export const Tag = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
  font-size: ${(props) => props.theme.font["font-size"]["tag"]};
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme.color["yellow-dark"]};
  background-color: ${(props) => props.theme.color["yellow-light"]};
  padding: 4px 8px;
  border-radius: 100px;
  text-transform: uppercase;
`;
