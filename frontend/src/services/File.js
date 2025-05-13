import api from "./api";

export const FileService = {
    uploadFile: async (file) => {
        try {
            const response = await api.post("/file/upload", file);
            return { data: response?.data?.url, error: null };
        } catch (e) {
            console.log(e);
            return { data: null, error: e };
        }
    },
};