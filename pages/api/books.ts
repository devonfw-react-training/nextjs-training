import { Book } from "./../../src/books/Book";
import localBookService from "./../../src/books/services/LocalBookService";
import type { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../lib/initMiddleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET"],
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book[]>
) {
  await cors(req, res);

  return localBookService
    .findAll()
    .then((books) => res.status(200).json(books))
    .catch((e) => res.status(500).end());
}
