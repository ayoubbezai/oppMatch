import React from 'react';
import useUsers from '../hooks/useUsers';
import SidebarAdmin from '../layout/SidebarAdmin';
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "../components/ui/table";
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import TableFooter from '../components/adminDashboard/TableFooter';
import { Pencil, Eye } from 'lucide-react';
import SearchInTable from '../components/adminDashboard/SearchInTable';
import DateInput from '../components/adminDashboard/DateInput';
import Sort from '../components/adminDashboard/Sort';
import SelectRole from '../components/adminDashboard/SelectRole';

const UsersList = () => {
  const {
    users,
    pagination,
    page,
    setPage,
    search,
    setSearch,
    isActive,
    setIsActive,
    sortBy,
    setSortBy,
    sortDirection,
    setSortDirection,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    perPage,
    setPerPage,
    loading,
    error,
    role,
    setRole,
    fetchUsers,
  } = useUsers();

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const formatAccessStatus = (expiryDate) => {
    if (!expiryDate) return 'No access';
    const now = new Date();
    const expiry = new Date(expiryDate);
    return now > expiry ? 'Expired' : 'Active until ' + formatDate(expiryDate);
  };

  if (loading) return <div className="p-6 text-[#E0E6FF]">Loading users...</div>;
  if (error) return <div className="p-6 text-red-400">Error: {error.message}</div>;

  return (
    <div className="flex flex-row text-white bg-gradient-to-b from-[#1A0A82] via-[#1f0c49] to-[#0B0121] min-h-screen">
      <SidebarAdmin />
      <div className="flex-1 p-6 px-12 bg-[#070A1D]/80">
        <h1 className="text-2xl font-semibold mb-4 text-[#E0E6FF]">User List</h1>
        <div className='flex flex-wrap items-center justify-between  gap-4 py-2 mt-6 mb-2'>
          <SearchInTable search={search} setSearch={setSearch} />
          <div className='flex flex-wrap items-center gap-2'>
            <DateInput startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
            <Sort sortBy={sortBy} sortDirection={sortDirection} setSortBy={setSortBy} setSortDirection={setSortDirection} />
            <SelectRole role={role} setRole={setRole} />
          </div>
        </div>
        <div className="rounded-md border bg-[#3A1D80]/80   border-[#2E1A66]">
          <Table className="bg-[#0A0E24]">
            <TableHeader className="bg-[#0F1442]/80">
              <TableRow className="hover:bg-[#0F1442]">
                <TableHead className="bg-[#3A1D80] text-[#C9D1F8]">NAME</TableHead>
                <TableHead className="bg-[#3A1D80] text-[#C9D1F8]">EMAIL</TableHead>
                <TableHead className="bg-[#3A1D80] text-[#C9D1F8]">ROLE</TableHead>
                <TableHead className="bg-[#3A1D80] text-[#C9D1F8]">STATUS</TableHead>
                <TableHead className="bg-[#3A1D80] text-[#C9D1F8]">ACCESS STATUS</TableHead>
                <TableHead className="bg-[#3A1D80] text-[#C9D1F8]">CREATED AT</TableHead>
                <TableHead className="bg-[#3A1D80] text-[#C9D1F8]">PAYMENT TOTAL</TableHead>
                <TableHead className="bg-[#3A1D80]  text-[#C9D1F8]">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.length > 0 ? (
                users.map((user) => (
                  <TableRow key={user.id || user.email} className="border-[#1D2255] hover:bg-[#141A47]">
                    <TableCell className="font-medium text-[#E0E6FF]">{user.name}</TableCell>
                    <TableCell className="text-[#9D86E8]">{user.email}</TableCell>
                    <TableCell>
                      <Badge
                        variant="default"
                        className={
                          user.role === "admin"
                            ? "bg-[#1E2B6B] text-[#A4B4FF]"
                            : "bg-[#1A1D3A] text-[#C3C9FF]"
                        }
                      >
                        {user.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="default"
                        className={
                          user.is_active
                            ? "bg-[#1A3A2E] text-[#6EE7B7]"
                            : "bg-[#3A1D2E] text-[#FCA5A5]"
                        }
                      >
                        {user.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="default"
                        className={
                          user.access_expires_at && new Date(user.access_expires_at) > new Date()
                            ? "bg-[#1A3A2E] text-[#6EE7B7]"
                            : "bg-[#3A1D2E] text-[#FCA5A5]"
                        }
                      >
                        {formatAccessStatus(user.access_expires_at)}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-[#C3C9FF]">{formatDate(user.created_at)}</TableCell>
                    <TableCell className="text-[#C3C9FF]">
                      {user.payment_sum_amount
                        ? `$${(user.payment_sum_amount / 100).toFixed(2)}`
                        : '$0.00'}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#9D86E8] hover:bg-[#2E1A66]/50"
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-[#86E8D7] hover:bg-[#1A3A3A]/50"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} className="text-center h-24 text-[#C3C9FF]">
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TableFooter setPerPage={setPerPage} setPage={setPage} pagination={pagination} />
        </div>
      </div>
    </div>
  );
};

export default UsersList;