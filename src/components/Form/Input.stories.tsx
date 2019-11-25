import React from 'react'
import Input from './Input';

export default {
    title: 'Form/Input',
    component: Input
};

export const text = () => <Input type="text" />
export const date = () => <Input type="date" />