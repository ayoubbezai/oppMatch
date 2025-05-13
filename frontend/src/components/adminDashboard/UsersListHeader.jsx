import React from 'react'
import { TableHeader, TableHead, TableRow } from '../ui/table';

const UsersListHeader = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead>NAME</TableHead>
                <TableHead>EMAIL</TableHead>
                <TableHead>ROLE</TableHead>
                <TableHead>CREATED AT</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>PAYMENT TOTAL</TableHead>
                <TableHead>ACTIONS</TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default UsersListHeader