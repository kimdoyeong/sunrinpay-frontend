import React from 'react';
import Button from './Button';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    component: Button,
    title: 'Form/Button',
    decorators: [withKnobs]
}

export const button = () => {
    const name = text('name', 'Button');
    return <Button>{name}</Button>
};
export const whiteButton = () => {
    const name = text('name', 'Button');
    return <Button white>{name}</Button>
};