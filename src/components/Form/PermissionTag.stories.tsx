import React from 'react'
import { PermissionTag } from './Table';

export default {
    title: 'Form/PermissionTag',
    component: PermissionTag
};

export function defaultTag() {
    return <PermissionTag name="default" />
}
export function adminTag() {
    return <PermissionTag name="admin" />
}