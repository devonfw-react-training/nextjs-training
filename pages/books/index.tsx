import { LocalBooksService } from "./../../src/books/services/LocalBookService";
import { BookOverviewContainer } from "./../../src/books/components/BookContainer";
import { RemoteBooksService } from "../../src/books/services/RemoteBookService";

export default function BooksPage() {
  const booksService = new RemoteBooksService();
  return <BookOverviewContainer bookService={booksService} />;
}
