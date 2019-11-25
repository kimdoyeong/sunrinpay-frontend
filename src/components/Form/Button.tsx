import styled, { css } from 'styled-components';

interface ButtonProps {
    /* 버튼을 흰색 버튼으로 만듭니다. */
    white?: boolean;
}
const Button = styled.button<ButtonProps>`
    all: unset;
    appearance: none;
    -webkit-appearance: none;
    font-size: 1rem;
    padding: .75em;
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    text-align: center;
    ${props => props.white ? css`
        background: #EAEAEA;
        color: black !important;
    ` : css`
        background: black;
        color: white !important;
    `}

`;

export default Button;