import React, { useState, useEffect } from 'react';
import { ResultService } from '../services/ResultService';

const History = () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await ResultService.getUserResult(page);
                if (result.error) {
                    setError(result.error);
                } else {
                    setData(result.data?.data);
                    setTotalPages(Math.ceil(result.data.total / result.data.per_page) || 1);
                    setError(null);
                }
            } catch (err) {
                setError('Failed to load history');
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    const handleNextPage = () => setPage(prev => Math.min(totalPages, prev + 1));
    const handlePrevPage = () => setPage(prev => Math.max(1, prev - 1));
    const handlePageChange = (newPage) => setPage(Math.max(1, Math.min(totalPages, newPage)));

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="p-12 w-full px-72 mx-auto min-h-screen bg-gradient-to-b from-[#081028] to-[#0B0121] text-white">
            <h1 className="text-2xl font-bold mb-6 text-[#B89EFF]">Your Internship Search History</h1>

            {loading && (
                <div className="text-center py-8">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#B89EFF] mb-2"></div>
                    <p className="text-[#B89EFF]">Loading your history...</p>
                </div>
            )}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}

            {data && (
                <>
                    <div className="space-y-4 mb-6">
                        {data.data?.map((item) => (
                            <div key={item.id} className="p-4 border border-[#4D27A8] rounded-lg hover:bg-[#4D27A8]/20 transition-colors duration-200 shadow-lg bg-[#0B0121]/50">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-lg text-[#B89EFF]">{item.position}</h3>
                                        <p className="text-gray-300">{item.company}</p>
                                    </div>
                                    <span className="text-sm text-[#B89EFF]/80">
                                        {formatDate(item.created_at)}
                                    </span>
                                </div>

                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-block text-[#B89EFF] hover:text-white text-sm"
                                >
                                    View Opportunity
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <button
                            onClick={handlePrevPage}
                            disabled={page === 1 || loading}
                            className={`px-4 py-2 rounded ${page === 1 || loading ? 'bg-[#4D27A8]/30 text-gray-400 cursor-not-allowed' : 'bg-[#4D27A8] text-white hover:bg-[#4D27A8]/80'}`}
                        >
                            Previous
                        </button>

                        <div className="flex items-center space-x-2 text-[#B89EFF]">
                            <span>Page</span>
                            <input
                                type="number"
                                min="1"
                                max={totalPages}
                                value={page}
                                onChange={(e) => handlePageChange(parseInt(e.target.value))}
                                className="w-16 px-2 py-1 border border-[#4D27A8] rounded text-center bg-[#0B0121] text-white"
                            />
                            <span>of {totalPages}</span>
                        </div>

                        <button
                            onClick={handleNextPage}
                            disabled={page === totalPages || loading || data.data?.length === 0}
                            className={`px-4 py-2 rounded ${page === totalPages || loading || data.data?.length === 0 ? 'bg-[#4D27A8]/30 text-gray-400 cursor-not-allowed' : 'bg-[#4D27A8] text-white hover:bg-[#4D27A8]/80'}`}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}

            {!loading && data?.data?.length === 0 && (
                <div className="text-center py-12">
                    <div className="mx-auto w-16 h-16 bg-[#4D27A8]/20 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#B89EFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-medium text-[#B89EFF] mb-1">No internship searches found</h3>
                    <p className="text-[#B89EFF]/70">Your search history will appear here when you save internships.</p>
                </div>
            )}
        </div>
    );
};

export default History;