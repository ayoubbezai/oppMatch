import React, { useCallback } from 'react';
import { Label } from '../ui/label';
import { Search } from "lucide-react";
import { debounce } from 'lodash';
import { Input } from '../ui/input';


const selectClassName = `
  p-2 bg-background text-white border border-gray-300 rounded-lg w-full md:w-auto 
  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-xs
  appearance-none
`;

const SearchInTable = ({ search, setSearch }) => {

    const handleSearchChange = useCallback(
        debounce((value) => {
            setSearch(value);
        }, 200),
        []
    );

    const onChange = (e) => {
        handleSearchChange(e.target.value);
    };

    return (
        <div className="relative w-full md:w-auto">
            <Label htmlFor="search" className="mb-0">
            </Label>
            <Input
                className={selectClassName}
                id="search"
                defaultValue={search}
                onChange={onChange}
                placeholder="Search ..."
            />
        </div>
    );
};

export default SearchInTable;