import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1rem;
  border: 0;
  padding: 0.5em 0.1em;
  border-bottom: 1px solid gray;
  border-radius: 0;
  &:focus {
    outline: 0;
  }
`;
export const Textarea = styled.textarea`
  all: unset;
  resize: vertical;
  min-height: 100px;
  border-bottom: 1px solid gray;
  padding: 0.5em 0.1em;
  font-size: 1rem;
`;
const InputWrapLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
`;

interface InputWrapProps {
  children: React.ReactNode;
  style?: any;
}
export function InputWrap({ children, style }: InputWrapProps) {
  return <InputWrapLabel style={style}>{children}</InputWrapLabel>;
}

export default Input;
