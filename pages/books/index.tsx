import { LocalBooksService } from "./../../src/books/services/LocalBookService";
import { BookOverviewContainer } from "./../../src/books/components/BookContainer";

export default function Books() {
  const booksService = new LocalBooksService();
  return <BookOverviewContainer bookService={booksService} />;
}
