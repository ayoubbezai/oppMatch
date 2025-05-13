import api from "./api";

export const StatService = {
  async getUserResult() {
    try {
      const response = await api.get("/stats");
      console.log(response);
      return {
        data: response?.data?.data,
        error: null,
      };
    } catch (e) {
      console.error("Error fetching results:", e);
      return {
        data: null,
        error: e.response?.data?.message || "Failed to fetch stat",
      };
    }
  },
};
