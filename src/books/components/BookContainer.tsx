import React, { FC, useState, useEffect, useCallback } from "react";
import { Book } from "../Book";
import { BooksService } from "../services/BooksService";
import { useRouter } from "next/router";
import { BookOverview } from "./BookOverview";

export interface Props {
  bookService: Pick<BooksService, "findAll">;
}

interface State {
  books: Book[];
}

export const BookOverviewContainer: FC<Props> = ({ bookService }) => {
  const router = useRouter();

  const [state, setState] = useState<State>({
    books: [],
  });

  useEffect(() => {
    bookService.findAll().then((books) => setState({ books }));
  }, [bookService, setState]);

  const selectBook = useCallback(
    (book: Book) => {
      router.push(`/book/${book.id}`);
    },
    [router]
  );

  return <BookOverview books={state.books} selectBook={selectBook} />;
};
