import {
  FocusEvent,
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
} from "react";

import { Container } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    isSelected?: boolean;
};

export const RadioInput = forwardRef(function RadioInput(
  { children, isSelected, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </Container>
  );
});
