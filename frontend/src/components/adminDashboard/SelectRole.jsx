import React from 'react'
const selectClassName = `
  p-2 bg-background text-white border border-gray-300 rounded-lg w-full md:w-auto 
  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs
  appearance-none
`;

const SelectRole = ({ role, setRole }) => {
    return (
        <select
            className={selectClassName}
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
        >
            <option value="">All Roles</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
        </select>
    )
}

export default SelectRole