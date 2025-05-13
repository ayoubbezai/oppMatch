import api from "./api";

export const AuthService = {
  async register(name, email, password) {
    try {
      //api call using api
      const response = await api.post("/register", { name, email, password });
      console.log(response);
      if (response.data.token) {
        //if token exict put it in localstorge
        localStorage.setItem("token", response.data.token);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        //success response
        return {
          user: response.data.user || null,
          error: null,
          message: "Login successful",
        };
      }
    } catch (error) {
      //error response
      return {
        user: null,
        error: true,
        message: error.response?.data?.message || "Login failed",
      };
    }
  },
  async login(email, password) {
    try {
      //api call using api
      const response = await api.post("/login", { email, password });
      console.log(response);
      if (response.data.token) {
        //if token exict put it in localstorge
        localStorage.setItem("token", response.data.token);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        //success response
        return {
          user: response.data.user || null,
          error: null,
          message: "Login successful",
        };
      }
    } catch (error) {
      //error response
      return {
        user: null,
        error: true,
        message: error.response?.data?.message || "Login failed",
      };
    }
  },

  async getCurrentUser() {
    try {
      // the token is in automatically

      const response = await api.get("/user");

      //success response
      return {
        user: response.data?.user || null,
        message: "User data retrieved",
      };
    } catch (error) {
      //erorr response
      return {
        user: null,
        error: true,
        message: error.response?.data?.message || "Failed to fetch user",
      };
    }
  },

  async logout() {
    try {
      await api.post("/logout");
      localStorage.removeItem("token");

      return {
        message: "Logout successful",
      };
    } catch (error) {
      return {
        error: error,
        message: "Logout failed ",
      };
    }
  },
};
