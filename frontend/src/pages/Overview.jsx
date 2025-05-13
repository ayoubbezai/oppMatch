import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { StatService } from '../services/StatService';
import SidebarAdmin from '../layout/SidebarAdmin';

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Overview = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data, error } = await StatService.getUserResult();
                console.log(data)

                if (error) {
                    setError(error);
                } else {
                    setStats(data);
                    setError(null);
                }
            } catch (err) {
                setError('Failed to load statistics');
                console.error('Error fetching stats:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    // Prepare chart data
    const paymentData = {
        labels: stats?.paymentChartData ? Object.keys(stats.paymentChartData) : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Payments Processed ($)',
                data: stats?.paymentChartData ? Object.values(stats.paymentChartData) : [1250, 1900, 3200, 2800, 4200, 3100, 4500],
                borderColor: '#B89EFF',
                backgroundColor: '#4D27A8/30',
                tension: 0.3,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#B89EFF',
                },
            },
            title: {
                display: true,
                text: 'Monthly Payment Analytics',
                color: '#B89EFF',
                font: {
                    size: 16,
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#B89EFF',
                },
                grid: {
                    color: '#4D27A8/30',
                },
            },
            y: {
                ticks: {
                    color: '#B89EFF',
                    callback: (value) => `$${value}`,
                },
                grid: {
                    color: '#4D27A8/30',
                },
            },
        },
    };

    // Analytics cards data
    const analyticsCards = [
        {
            title: 'Total Results',
            value: stats?.totalLinks ? stats.totalLinks.toLocaleString() : '0',
            change: '+12% from last month',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            link: '/results',
        },
        {
            title: 'Total Payments',
            value: stats?.totalPayments ? `$${stats.totalPayments.toLocaleString()}` : '$0',
            change: '+18% from last quarter',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            link: '/payments',
        },
        {
            title: 'Total Users',
            value: stats?.totalUsers ? stats.totalUsers.toLocaleString() : '0',
            change: '+23% from last year',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            link: '/users',
        },
        {
            title: 'Total Tests',
            value: stats?.totalTests ? stats.totalTests.toLocaleString() : '0',
            change: '+1.4% from last month',
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            link: '/tests',
        },
    ];

    if (loading) {
        return (
            <div className="p-6 min-h-screen bg-gradient-to-b from-[#081028] to-[#0B0121] flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#B89EFF] mb-2"></div>
                    <p className="text-[#B89EFF]">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6 min-h-screen bg-gradient-to-b from-[#081028] to-[#0B0121] flex items-center justify-center">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-md">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className='flex flex-row'>
            <SidebarAdmin />
            <div className="p-6 max-h-screen w-full overflow-y-auto bg-gradient-to-b from-[#081028] to-[#0B0121] text-white">
                {/* Navigation Breadcrumb */}
                <div className="flex items-center mb-6 text-sm">
                    <Link to="/" className="text-[#B89EFF] hover:text-white">Home</Link>
                    <span className="mx-2 text-[#B89EFF]/50">/</span>
                    <span className="text-white">Dashboard</span>
                </div>

                <h1 className="text-2xl font-bold mb-6 text-[#B89EFF]">Analytics Overview</h1>

                {/* Analytics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {analyticsCards.map((card, index) => (
                        <Link
                            to={card.link}
                            key={index}
                            className="p-6 rounded-lg border border-[#4D27A8] bg-[#0B0121]/50 hover:bg-[#4D27A8]/20 transition-colors duration-200 shadow-lg hover:shadow-[#4D27A8]/30"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-sm text-gray-300">{card.title}</p>
                                    <h3 className="text-2xl font-bold mt-1 text-[#B89EFF]">{card.value}</h3>
                                    <p className="text-xs mt-2 text-[#B89EFF]/70">{card.change}</p>
                                </div>
                                <div className="p-2 rounded-full bg-[#4D27A8]/30 text-[#B89EFF]">
                                    {card.icon}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Payment Chart */}
                <div className="p-6 rounded-lg border border-[#4D27A8] bg-[#0B0121]/50 mb-8 shadow-lg">
                    <div className="h-96">
                        <Line data={paymentData} options={chartOptions} />
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link
                        to="/results"
                        className="p-6 rounded-lg border border-[#4D27A8] bg-[#0B0121]/50 hover:bg-[#4D27A8]/20 transition-colors shadow-lg flex items-center"
                    >
                        <div className="mr-4 p-3 rounded-full bg-[#4D27A8]/30 text-[#B89EFF]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">View All Results</h3>
                            <p className="text-sm text-[#B89EFF]/70">Detailed analytics and reports</p>
                        </div>
                    </Link>

                    <Link
                        to="/payments"
                        className="p-6 rounded-lg border border-[#4D27A8] bg-[#0B0121]/50 hover:bg-[#4D27A8]/20 transition-colors shadow-lg flex items-center"
                    >
                        <div className="mr-4 p-3 rounded-full bg-[#4D27A8]/30 text-[#B89EFF]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Payment History</h3>
                            <p className="text-sm text-[#B89EFF]/70">View and manage transactions</p>
                        </div>
                    </Link>

                    <Link
                        to="/users"
                        className="p-6 rounded-lg border border-[#4D27A8] bg-[#0B0121]/50 hover:bg-[#4D27A8]/20 transition-colors shadow-lg flex items-center"
                    >
                        <div className="mr-4 p-3 rounded-full bg-[#4D27A8]/30 text-[#B89EFF]">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">User Management</h3>
                            <p className="text-sm text-[#B89EFF]/70">View and manage all users</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Overview;