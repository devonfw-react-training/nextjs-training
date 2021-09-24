import { Book } from "./../../../src/books/Book";
import { LocalBooksService } from "./../../../src/books/services/LocalBookService";
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../../lib/initMiddleware";

const bookService = new LocalBooksService();

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "PUT", "OPTIONS"],
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book>
) {
  await cors(req, res);

  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      return bookService
        .findOne(Number.parseInt(id as string))
        .then((book) => res.status(200).json(book))
        .catch((e) => res.status(500).end());
    case "POST":
    case "PUT":
      return bookService
        .save(JSON.parse(req.body))
        .then((book) => res.status(200).json(book))
        .catch((e) => res.status(500).end());
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
