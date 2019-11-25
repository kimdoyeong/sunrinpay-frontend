import React from 'react'
import { Provider } from 'react-redux'
import Modal from '.'
import { action } from '@storybook/addon-actions';

const store = {
    getState() {
        return {
            Modal: {
                modal1: true
            }
        }
    },
    subscribe: () => { },
    dispatch: action('dispatch')
}
const withReduxMockStore = (story: () => JSX.Element) => (
    <Provider store={store as any}>{story()}</Provider>
);

export default {
    component: Modal,
    title: 'Modal',
    decorators: [withReduxMockStore]
};

export const modal = () => <Modal id="modal1"><h1>Hello</h1>Modal</Modal>;