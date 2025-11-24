import axios from "axios";
import { API_BASE_URL } from "@/config/configURL";
import {
  Book,
  BookResponse,
  BookSearchParams,
  CreateBookDto,
  UpdateBookDto,
} from "@/interface/book";

//W---------={ axios instance with proper configuration }=----------</br>
const bookApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

//W---------={ Add request interceptor to include auth token }=----------</br>
bookApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

class BookService {
  //W---------={ Get all books }=----------</br>
  async getAllBooks(params: BookSearchParams): Promise<BookResponse> {
    try {
      const response = await bookApi.get<BookResponse>("/api/books", {
        params,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw new Error("Failed to fetch books: " + (error as Error).message);
    }
  }

  //W---------={ Get book by id }=----------</br>
  async getBookById(id: number): Promise<Book> {
    try {
      const response = await bookApi.get<Book>(`/api/books/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching book:", error);
      throw new Error("Failed to fetch book: " + (error as Error).message);
    }
  }

  //W---------={ Create book }=----------</br>
  async createBook(bookData: CreateBookDto): Promise<Book> {
    try {
      const response = await bookApi.post<Book>("/api/books", bookData);
      return response.data;
    } catch (error) {
      console.error("Error creating book:", error);
      throw new Error("Failed to create book: " + (error as Error).message);
    }
  }

  //W---------={ Update book }=----------</br>
  async updateBook(id: number, bookData: UpdateBookDto): Promise<Book> {
    try {
      const response = await bookApi.put<Book>(`/api/books/${id}`, bookData);
      return response.data;
    } catch (error) {
      console.error("Error updating book:", error);
      throw new Error("Failed to update book: " + (error as Error).message);
    }
  }

  //W---------={ Delete book }=----------</br>
  async deleteBook(id: number): Promise<void> {
    try {
      await bookApi.delete(`/api/books/${id}`);
    } catch (error) {
      console.error("Error deleting book:", error);
      throw new Error("Failed to delete book: " + (error as Error).message);
    }
  }
}

export const bookService = new BookService();
export default bookService;
