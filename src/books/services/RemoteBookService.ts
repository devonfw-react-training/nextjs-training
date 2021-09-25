import { Book } from "../Book";
import { BooksService } from "./BooksService";

const API_BASE = "http://localhost:3001";
export class RemoteBooksService implements BooksService {
  findOne(id: number): Promise<Book> {
    if (id || id === 0) {
      return fetch(`${API_BASE}/api/book/${id}`).then((response) =>
        response.json()
      );
    } else {
      return Promise.reject(`book with id: ${id} not found`);
    }
  }

  findAll(): Promise<Book[]> {
    return fetch(`${API_BASE}/api/books`).then((response) => response.json());
  }

  save(bookToSave: Book): Promise<Book> {
    const updateExisting = bookToSave.id || bookToSave.id;

    return fetch(`${API_BASE}/api/book`, {
      method: updateExisting ? "POST" : "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookToSave),
    }).then((response) => response.json());
  }
}

export default new RemoteBooksService();
