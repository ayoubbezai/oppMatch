import api from "./api";

export const ResultService = {
  async getUserResult(page = 1) {
    try {
      const response = await api.get("/getHistory", {
        params: {
          page: page,
        },
      });

      console.log(response);
      return {
        data: response?.data,
        error: null,
      };
    } catch (e) {
      console.error("Error fetching results:", e);
      return {
        data: null,
        error: e.response?.data?.message || "Failed to fetch history",
      };
    }
  },
};
