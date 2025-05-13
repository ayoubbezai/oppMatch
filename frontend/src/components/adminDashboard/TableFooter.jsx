import React from 'react';
import PerPage from './PerPage';
import PageChange from './PageChange';

const TableFooter = ({ setPerPage, setPage, pagination }) => {


    return (
        <div className="flex justify-between items-center text-[#C9D1F8]  px-4 py-1">
            <PageChange page={pagination?.current_page} setPage={setPage} total_pages={pagination?.total_pages} />

            <p>Page {pagination?.current_page} of {pagination?.total_pages}</p>

            <PerPage perPage={pagination?.items_per_page} setPerPage={setPerPage} />
        </div>
    );
};

export default TableFooter;