import React from 'react';
import { ChevronDown } from 'lucide-react';


const selectClassName = `
  p-2 bg-background text-white border border-gray-300 rounded-lg w-full md:w-auto 
  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs
  appearance-none
`;
const SortDirection = ({ sortDirection, setSortDirection }) => {
    return (
        <div className="relative">
            <select
                className={selectClassName}
                name="sort_direction"
                value={sortDirection}
                onChange={(e) => setSortDirection(e.target.value)}
            >
                <option value="asc">Ascending (A-Z)</option>
                <option value="desc">Descending (Z-A)</option>
            </select>
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
        </div>
    );
};

export default SortDirection;
