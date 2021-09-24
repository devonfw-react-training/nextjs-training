import { LocalBooksService } from "./../../src/books/services/LocalBookService";
import { BookDetails } from "../../src/books/components/BookDetails";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Book } from "../../src/books/Book";
import { RemoteBooksService } from "../../src/books/services/RemoteBookService";

const booksService = new RemoteBooksService();

export default function BookPage() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<Book>();

  useEffect(() => {
    booksService.findOne(Number.parseInt(id as string)).then((b) => setBook(b));
  }, [id]);

  return book ? (
    <BookDetails book={book} onBookChange={async () => router.back()} />
  ) : null;
}
