import styled from 'styled-components'

export const Container = styled.label`
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.color['base-button']};
  color: ${({ theme }) => theme.color['base-text']};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font["font-size"]["textS"]};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.color['purple-light']};
    border-color: ${({ theme }) => theme.color['purple']};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.color['purple']};
  }
`
