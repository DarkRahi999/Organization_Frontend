//W <Comment>---------={ API_BASE_URL }=----------</Comment>
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_Backend_API_URL ||
  process.env.Backend_API_URL ||
  "http://localhost:8001";

export const API_URLS = {
  books: {
    getAll: `${API_BASE_URL}/books`,
    getById: (id: number) => `${API_BASE_URL}/books/${id}`,
    create: `${API_BASE_URL}/books`,
    update: (id: number) => `${API_BASE_URL}/books/${id}`,
    delete: (id: number) => `${API_BASE_URL}/books/${id}`,
  },
};
