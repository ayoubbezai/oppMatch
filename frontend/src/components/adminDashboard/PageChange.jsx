import React from 'react'
import { Badge } from "../ui/badge"

const PageChange = ({ page, setPage, total_pages, loading }) => {
    return (
        <div className='flex gap-2 text-[#C9D1F8]'>
            <button disabled={page === 1 || loading} onClick={() => setPage(page - 1)}><Badge className={"text-[17px] py-[1px] bg-background-lighter font-semibold"}>{`${"<"}`}</Badge></button>
            <button disabled={page === total_pages || loading} onClick={() => setPage(page + 1)}><Badge className={"text-lg font-semibold text-[17px] py-[1px] bg-background-lighter "}>{`${">"}`}</Badge></button>
        </div>
    )
}

export default PageChange