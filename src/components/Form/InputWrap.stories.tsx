import React from 'react'
import Input, { InputWrap } from './Input';

export default {
    title: 'Form/InputWrap',
    component: InputWrap
};

export const inputWrap = () => (
    <InputWrap>
        <span>
            인풋
        </span>
        <Input type="text" />
    </InputWrap>
)