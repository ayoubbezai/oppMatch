import React, { useState, useCallback } from 'react';
import { MdMenu, MdMenuOpen, MdLogout, MdPeople, MdDashboard } from "react-icons/md";
import { Button } from '../components/ui/button';
import { useAuth } from '../hooks/useAuth';
import { NavLink } from 'react-router-dom';

const SidebarAdmin = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { logout } = useAuth();

    const toggleSidebar = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    const adminLinks = [
        { path: "/overview", icon: <MdDashboard size={18} />, label: "Overview" },
        { path: "/users_list", icon: <MdPeople size={18} />, label: "User Management" }
    ];

    return (
        <div className={`${isOpen ? "w-64" : "w-16"} bg-gradient-to-b from-[#081028] to-[#0B0121] max-h-screen overflow-y-auto z-50 min-h-screen flex flex-col justify-between transition-all duration-300 lg:relative  border-r  border-[#3A1D80] shadow-xl`}>
            <div className='flex justify-center flex-col items-center relative pb-1 pt-4'>
                <button
                    className={`absolute top-4 ${!isOpen ? "right-4" : "right-3"} bg-[#3A1D80] p-1.5 rounded-full hover:bg-[#4D27A8] transition-colors shadow-md`}
                    onClick={toggleSidebar}
                >
                    {isOpen ?
                        <MdMenuOpen size={16} className="text-[#B89EFF]" /> :
                        <MdMenu size={16} className="text-[#B89EFF]" />
                    }
                </button>

                {isOpen ? (
                    <>
                        <div className="flex flex-col items-center mb-6 flex-shrink-0">
                            <div className="relative w-12  h-12 mb-3">
                                <div className="   inset-0 rounded-full bg-[#4D27A8] blur-md opacity-70 z-0" />
                                <div className="w-12 h-12 bg-gradient-to-br from-[#5F30CC] to-[#3A1D80] rounded-full flex items-center justify-center text-white font-bold text-xl relative  z-10 shadow-lg">
                                    A
                                </div>
                            </div>
                            <h1 className='text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B89EFF] to-[#8A6AFF]'>
                                Admin
                            </h1>
                        </div>
                        <nav className="w-full px-3">
                            <ul className="space-y-1.5">
                                {adminLinks.map((link) => (
                                    <li key={link.path}>
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `flex items-center gap-2 p-2 rounded-lg transition-all text-sm ${isActive ?
                                                    'bg-[#3A1D80]/80 text-white shadow-[inset_0_0_6px_1px_rgba(184,158,255,0.3)]' :
                                                    'hover:bg-[#2A1360] text-[#CBB8FF]'}`
                                            }
                                        >
                                            <span className="text-[#B89EFF]">{link.icon}</span>
                                            <span className="font-medium">{link.label}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </>
                ) : (
                    <div className="flex flex-col  items-center mt-12 space-y-6">
                        <div className="relative w-10  h-10">
                            <div className=" inset-0 rounded-full bg-[#4D27A8] blur-md opacity-70 z-0" />
                            <div className="w-10 h-10 bg-gradient-to-br from-[#5F30CC] to-[#3A1D80] rounded-full flex items-center justify-center text-white font-bold text-base relative z-10 shadow-md">
                                A
                            </div>
                        </div>
                        <nav className="w-full px-1.5">
                            <ul className="space-y-5">
                                {adminLinks.map((link) => (
                                    <li key={link.path} className="flex justify-center">
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                `p-2 rounded-lg transition-all ${isActive ?
                                                    'bg-[#3A1D80]/80 text-white shadow-[inset_0_0_6px_1px_rgba(184,158,255,0.3)]' :
                                                    'hover:bg-[#2A1360] text-[#CBB8FF]'}`
                                            }
                                            title={link.label}
                                        >
                                            <span className="text-[#B89EFF]">{link.icon}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>

            {isOpen ? (
                <Button
                    className="flex items-center justify-center gap-1.5 text-xs py-2 w-10/12 mb-6 mx-auto bg-gradient-to-r from-[#5F30CC] to-[#3A1D80] hover:from-[#6E3DD9] hover:to-[#4A24A3] text-white shadow-md hover:shadow-[0_0_8px_2px_rgba(92,48,204,0.3)] transition-all"
                    onClick={logout}
                >
                    <MdLogout size={14} />
                    Sign Out
                </Button>
            ) : (
                <button
                    onClick={logout}
                    className="flex items-center justify-center mb-6 mx-auto p-2 text-[#B89EFF] hover:bg-[#3A1D80]/50 rounded-lg transition-all"
                    title="Sign Out"
                >
                    <MdLogout size={18} />
                </button>
            )}
        </div>
    );
};

export default SidebarAdmin;