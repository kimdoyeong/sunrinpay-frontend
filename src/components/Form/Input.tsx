import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    font-size: 1rem;
    border: 0;
    padding: .5em 1em;
    border-bottom: 1px solid gray;
    &:focus {
        outline: 0;
    }
`;
const InputWrapLabel = styled.label`
    display: flex;
    flex-direction: column;
    margin: 2em 0;
`;

interface InputWrapProps {
    children: React.ReactNode
}
export function InputWrap({ children }: InputWrapProps) {
    return (
        <InputWrapLabel>
            {children}
        </InputWrapLabel>
    )
}


export default Input;