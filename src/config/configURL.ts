import { BASE_URL } from "./const";

// W<Comment>---------={ Backend Api End Point }=----------</Comment>
const API = `${BASE_URL}/api`;

export const API_URLS = {
  auth: {
    login: () => `${API}/auth/login`,
    logout: () => `${API}/auth/logout`,
  },
};
