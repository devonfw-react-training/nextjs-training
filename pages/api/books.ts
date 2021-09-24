import { Book } from "./../../src/books/Book";
import { LocalBooksService } from "./../../src/books/services/LocalBookService";
import type { NextApiRequest, NextApiResponse } from "next";

const bookService = new LocalBooksService();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
) {
  return bookService
    .findAll()
    .then((books) => res.status(200).json(books))
    .catch((e) => res.status(500).end());
}
