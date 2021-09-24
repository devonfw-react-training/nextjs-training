import { BookDetails } from "../../src/books/components/BookDetails";

import { useRouter } from "next/router";
import { FC } from "react";
import { Book } from "../../src/books/Book";
import { RemoteBooksService } from "../../src/books/services/RemoteBookService";
import { GetServerSideProps } from "next";

const booksService = new RemoteBooksService();

interface Props {
  book: Book;
}

const BookPage: FC<Props> = ({ book }) => {
  const router = useRouter();
  return book ? (
    <BookDetails book={book} onBookChange={async () => router.back()} />
  ) : null;
};

export default BookPage;

const getServerSideProps: GetServerSideProps = async function (context) {
  const { id } = context.query;

  const book = await booksService.findOne(Number.parseInt(id as string));

  return {
    props: { book }, // will be passed to the page component as props
  };
};

export { getServerSideProps };
