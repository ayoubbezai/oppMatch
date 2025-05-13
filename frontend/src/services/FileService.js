import api from "./api";

export const FileService = {
  async uploadFile(formData) {
    try {
      const response = await api.post("getDataFromAgent", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Assuming response data contains the full JSON, including internships
      return { data: response.data, error: null };
    } catch (e) {
      console.error("Upload failed:", e);
      return { data: null, error: e };
    }
  },
};
