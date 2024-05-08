import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1160px;
  gap: 25px;

  h3{
    font-size: ${(props) => props.theme.font["font-size"]["titleXS"]};
    font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
    color: ${(props) => props.theme.color["base-subtitle"]};
  }
`;
export const ContentOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
`;

export const ContentAddress = styled.div`
  background-color: ${(props) => props.theme.color["base-card"]};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 12px;
`;
export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  margin-bottom: 1rem;
`;

export const ContentHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div``;

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxNumberComplement = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const BoxCityUF = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const InputCep = styled.input.attrs({
  type: "text",
  placeholder: "CEP",
})`
  background-color: ${(props) => props.theme.color["base-input"]};
  padding: 12px;
  width: 200px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color["base-hover"]};
`;

export const InputStreet = styled.input.attrs({
  type: "text",
  placeholder: "Rua",
})`
  background-color: ${(props) => props.theme.color["base-input"]};
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color["base-hover"]};
`;

export const InputNumber = styled.input.attrs({
  type: "text",
  placeholder: "Número",
})`
  background-color: ${(props) => props.theme.color["base-input"]};
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color["base-hover"]};
`;

export const InputComplement = styled.input.attrs({
  type: "text",
  placeholder: "Complemento",
})`
  background-color: ${(props) => props.theme.color["base-input"]};
  padding: 12px;
  width: 348px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color["base-hover"]};
`;

export const InputNeighborhood = styled.input.attrs({
  type: "text",
  placeholder: "Bairro",
})`
  background-color: ${(props) => props.theme.color["base-input"]};
  padding: 12px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color["base-hover"]};
`;

export const InputCity = styled.input.attrs({
  type: "text",
  placeholder: "Cidade",
})`
  background-color: ${(props) => props.theme.color["base-input"]};
  padding: 12px;
  width: 276px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color["base-hover"]};
`;

export const InputUf = styled.input.attrs({
  type: "text",
  placeholder: "UF",
})`
  background-color: ${(props) => props.theme.color["base-input"]};
  padding: 12px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.color["base-hover"]};
`;

export const ContentPayment = styled.div`
  background-color: ${(props) => props.theme.color["base-card"]};
  padding: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Title = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["textM"]};
  color: ${(props) => props.theme.color["base-text"]};
`;

export const Description = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["textS"]};
  color: ${(props) => props.theme.color["base-text"]};
`;

export const MethodPayment = styled.div`
  background-color: ${(props) => props.theme.color["base-button"]};
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 179px;
  border-radius: 8px;
  padding: 16px;
  gap: 12px;
`;

export const TextPayment = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["baloo"]};
  font-size: ${(props) => props.theme.font["font-size"]["buttonM"]};
  color: ${(props) => props.theme.color["base-text"]};
`;

export const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Cart = styled.div`
  background-color: ${(props) => props.theme.color["base-card"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 448px;
  border-radius: 8px 50px 8px 50px;
  padding: 40px;
  gap: 3rem;
`;

export const ContainerValues = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 368px;
  gap: 12px;
`;

export const ContentValues = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 368px;
  gap: 12px;
`;

export const ContentSpanDescription = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
  font-size: ${(props) => props.theme.font["font-size"]["textS"]};
  color: ${(props) => props.theme.color["base-text"]};
`;

export const ContentSpanValue = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
  font-size: ${(props) => props.theme.font["font-size"]["textM"]};
  color: ${(props) => props.theme.color["base-text"]};
`;

export const ContentSpanTotal = styled.span`
  font-family: ${(props) => props.theme.font["font-family"]["roboto"]};
  font-size: ${(props) => props.theme.font["font-size"]["textL"]};
  font-weight: 700;
  color: ${(props) => props.theme.color["base-text"]};
`;

export const ContentFrame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ButtonConfirmOrder = styled.button`
  width: 368px;
  height: 46px;
  background-color: ${(props) => props.theme.color["yellow"]};
  border: none;
  border-radius: 6px;
  color: white;
  font-weight: 700;
  font-family:  ${(props) => props.theme.font["font-family"]["roboto"]};
  font-size: ${(props) => props.theme.font["font-size"]["buttonG"]};
`;