import { BookOverviewContainer } from "./../../src/books/components/BookContainer";
import booksService from "../../src/books/services/RemoteBookService";
import { Book } from "../../src/books/Book";
import { FC } from "react";
import { GetStaticProps } from "next";

interface Props {
  books: Book[];
}

const BooksPage: FC<Props> = ({ books }) => {
  return <BookOverviewContainer books={books} />;
};

export default BooksPage;

export const getStaticProps: GetStaticProps = async function () {
  const books = await booksService.findAll();
  return {
    props: { books },
    revalidate: 30,
  };
};
