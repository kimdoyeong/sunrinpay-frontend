import React from 'react';
import Button from './Button';

export default {
    component: Button,
    title: 'ButtonComponent'
}

export const buttonComponent = () => <Button>버튼</Button>;

buttonComponent.story = {
    children: 'Button'
}