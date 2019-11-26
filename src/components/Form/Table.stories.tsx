import React from 'react'
import Table, { PermissionTag, TableWrap } from './Table';

export default {
    title: 'Form/Table',
    component: Table
}

const tableJsx = (
    <Table>
        <thead>
            <tr>
                <th>이름</th>
                <th>학번</th>
                <th>권한</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>홍길동</td>
                <td>10111</td>
                <td>
                    <PermissionTag name="default" />
                    <PermissionTag name="admin" />
                </td>
            </tr>
            <tr>
                <td>홍길동</td>
                <td>10111</td>
                <td>
                    <PermissionTag name="default" />
                </td>
            </tr>
            <tr>
                <td>홍길동</td>
                <td>10111</td>
                <td>
                    <PermissionTag name="default" />
                </td>
            </tr>
        </tbody>
    </Table>
);
export function table() {
    return tableJsx;
}
export function tableWithWrap() {
    return (
        <TableWrap>
            {tableJsx}
        </TableWrap>
    )
}