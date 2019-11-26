import React, { useEffect, useState } from 'react'
import AdminSection from './AdminSection'
import Table, { TableWrap, PermissionTag } from '../../Form/Table'
import Button from '../../Form/Button'
import useAPIWithToken from '../../../lib/useAPIWithToken'
import getUserList from '../../../lib/api/admin/getUserList'

function AdminUsers() {
    const getUser = useAPIWithToken(getUserList);
    const [users, setUsers] = useState<any>(null);

    useEffect(() => {
        if (!getUser || users) return;
        Promise.resolve(getUser())
            .then(data => setUsers(data))
            .catch(e => {
                alert(e.message);
            });
    }, [getUser, users]);
    if (!users) return <div>로드 중...</div>;
    return (
        <AdminSection>
            <h1 className="title">유저 관리</h1>
            <TableWrap>
                <Table>
                    <thead>
                        <tr>
                            <th>학번</th>
                            <th>이름</th>
                            <th>권한</th>
                            <th>액션</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((data: any, i: any) => <User no={data.no} name={data.name} permissions={data.permission} key={i} />)}
                    </tbody>
                </Table>
            </TableWrap>
        </AdminSection>
    )
}

interface UserProps {
    no: string,
    name: string,
    permissions: ("default" | "admin")[]
}
function User({ no, name, permissions }: UserProps) {
    return (
        <tr>
            <td>{no}</td>
            <td>{name}</td>
            <td>
                {permissions.map((p, i) => <PermissionTag name={p} key={i} />)}
            </td>
            <td>
                <Button>
                    ...
            </Button>
            </td>
        </tr>

    )
}

export default AdminUsers;