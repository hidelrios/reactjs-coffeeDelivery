import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Container = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color["base-button"]};
  border-radius: 6px;

  background-color: ${({ theme }) => theme.color["base-input"]};

  transition: all 0.2s;

  &[data-state="focused"] {
    border-color: ${({ theme }) => theme.color["yellow-dark"]};
  }

  &[data-state="blurred"] {
    border-color: ${({ theme }) => theme.color["base-button"]};
  }

  input {
    color: ${({ theme }) => theme.color["base-text"]};
    width: 100%;
    background-color: transparent;
    border: none;
    padding: 12px;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.color["base-label"]};
    }
  }

  span {
    color: ${({ theme }) => theme.color["base-label"]};
    padding-right: 12px;
    font-weight: ${({ theme }) => theme.font["font-size"]["textS"]};
    font-style: italic;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: ${({ theme }) => theme.font["font-size"]["textS"]};
  font-weight: 400;
  color: red;
`;
