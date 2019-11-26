import React from 'react'
import styled from 'styled-components';

const Table = styled.table`
    min-width: 100%;
    overflow-x: auto;
    border-collapse: collapse;

    tbody {
        text-align: center;
    }
    thead {
        background: #82b2ff;
    }
    td,th {
        appearance: none;
        min-width: 130px;
        padding: .5em;

    }
    tr {
        border-bottom: 1px solid #EAEAEA;
    }
    tr:nth-child(2n) {
        background: #EAEAEA;
    }
`;

const TagWrap = styled.div`
    display: inline-block;
    padding: 5px;
    color: white;
    border-radius: 3px;
    margin: 0 5px;
`;

interface PermissionTagProps {
    name: "admin" | "default"
}
const colors = {
    default: "#737373",
    admin: '#990000',
    shop: '#003b99'
}
export function PermissionTag({ name }: PermissionTagProps) {

    return (<TagWrap style={{ background: colors[name] }}>{name}</TagWrap>)
}

const Wrap = styled.div`
    overflow-x: auto;
`;
export function TableWrap({ children }: { children: React.ReactNode }) {
    return <Wrap>{children}</Wrap>;
}
export default Table;