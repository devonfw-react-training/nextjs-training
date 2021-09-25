import { BookDetails } from "../../src/books/components/BookDetails";

import { useRouter } from "next/router";
import { FC } from "react";
import { Book } from "../../src/books/Book";
import booksService from "../../src/books/services/RemoteBookService";
import { GetServerSideProps } from "next";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const book = await booksService.findOne(Number.parseInt(id as string));
  return {
    props: { book },
  };
};
