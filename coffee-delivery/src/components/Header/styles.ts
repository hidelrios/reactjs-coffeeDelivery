import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color["purple-dark"]};
  background-color: ${(props) => props.theme.color["purple-light"]};
  border-radius: 6px;
  padding: 10px 8px;
  gap: 4px;

  span {
    font-size: ${(props) => props.theme.font["font-size"]["textL"]};
  }
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color["yellow-light"]};
  border-radius: 6px;
  padding: 4px;
  gap: 4px;

  a {
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.color['yellow-light']};
    color: ${({ theme }) => theme.color['yellow-dark']};

    padding: 8px;
    border-radius: 6px;

    position: relative;

    &[aria-disabled='true'] {
      pointer-events: none;
    }
  

  span {
    font-size: ${(props) => props.theme.font["font-size"]["textS"]};
    font-weight: bold;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color["yellow-dark"]};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);
  }
  }
`;
