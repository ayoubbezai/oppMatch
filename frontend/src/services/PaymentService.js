import api from "./api";

export const PaymentService = {
  async chargilypay() {
    try {
      const response = await api.post("/chargilypay/redirect");
      console.log(response);
      return { data: response?.data?.url, error: null };
    } catch (e) {
      console.log(e);
      return { data: null, error: e };
    }
  },
};
