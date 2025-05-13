import api from "./api";

export const UserServices = {
  async getAllUsers(
    per_page,
    search,
    is_active,
    start_date,
    end_date,
    sortBy,
    sortDirection,
    role,
    page = 1
  ) {
    try {
      const params = new URLSearchParams();
      const appendParam = (key, value) => {
        if (value !== undefined && value !== null && value !== "") {
          params.append(key, value);
        }
      };

      appendParam("per_page", per_page);
      appendParam("search", search);
      appendParam("is_active", is_active); // Added missing parameter
      if (start_date && end_date) {
        appendParam("start_date", start_date);
        appendParam("end_date", end_date);
      }
      appendParam("page", page);
      appendParam("sort_by", sortBy);
      appendParam("sort_direction", sortDirection);
      appendParam("role", role);

      // API call using api
      const response = await api.get(`/users?${params.toString()}`);
      return { data: response.data, error: null };
    } catch (error) {
      console.error("Error fetching users:", error); // Changed "patients" to "users" for consistency
      return {
        data: null,
        error:
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch users", // Improved error handling
      };
    }
  },
};
