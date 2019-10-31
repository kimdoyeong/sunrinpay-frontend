import styled from 'styled-components';

const Input = styled.input`
    font-size: 1rem;
    border: 0;
    background: #bdbdbd;
    padding: .5em 1em;
    border-radius: 5px;
    box-shadow: 5px 3px 5px -1px #bdbdbd;
    &:focus {
        outline: 0;
    }
`;
export const InputWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Input;