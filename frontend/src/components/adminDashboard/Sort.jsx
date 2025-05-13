import React from 'react'


const selectClassName = `
  p-2 bg-background text-white border border-gray-300 rounded-lg w-full md:w-auto 
  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs
  appearance-none
`;
const Sort = ({ sortBy, sortDirection, setSortBy, setSortDirection }) => {

    return (
        <>
            <select
                className={selectClassName}

                name="sort_direction"
                value={sortDirection}
                onChange={(e) => setSortDirection(e.target.value)}
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <select
                className={selectClassName}

                name="sort_by"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="created_at">Created At</option>
                <option value="patient_name">Name</option>
                <option value="age">Age</option>
            </select>

        </>
    )
}

export default Sort