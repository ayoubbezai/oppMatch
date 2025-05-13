import { useEffect, useState, useCallback, useMemo } from "react";
import { UserServices } from "../services/UserServices";
import _ from "lodash";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [pagination, setPagination] = useState({});
    const [page, setPage] = useState(1);
    const [role, setRole] = useState();
    const [search, setSearch] = useState("");
    const [isActive, setIsActive] = useState("");
    const [sortBy, setSortBy] = useState("created_at");
    const [sortDirection, setSortDirection] = useState("asc");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [perPage, setPerPage] = useState(15);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Memoize the debounced function
    const debouncedFetchUsers = useMemo(() => {
        return _.debounce(async (currentPage) => {
            setLoading(true);
            try {
                const { data, error } = await UserServices.getAllUsers(
                    perPage,
                    search,
                    isActive,
                    startDate,
                    endDate,
                    sortBy,
                    sortDirection,
                    role,
                    currentPage
                );

                if (data?.success) {
                    setUsers(data.data);
                    setPagination(data.pagination);
                } else {
                    setError(error);
                }
            } catch (err) {
                setError(err.message || "Failed to fetch users");
            }
            setLoading(false);
        }, 300);
    }, [perPage, search, isActive, startDate, endDate, sortBy, sortDirection, role]);

    // Memoize the fetchUsers function
    const fetchUsers = useCallback((currentPage) => {
        debouncedFetchUsers(currentPage);
    }, [debouncedFetchUsers]);

    // Fetch users when page or fetchUsers changes
    useEffect(() => {
        fetchUsers(page);
    }, [page, fetchUsers]);

    // Reset page to 1 when filters change
    useEffect(() => {
        setPage(1);
    }, [perPage, search, isActive, sortBy, sortDirection, startDate, endDate, role]);

    return {
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
    };
};

export default useUsers;