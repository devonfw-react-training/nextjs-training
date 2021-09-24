import React, { FC, useState, useEffect } from "react";
import { Book } from "../Book";
import { BooksService } from "../services/BooksService";
import { BookOverview } from "./BookOverview";

export interface Props {
  bookService: Pick<BooksService, "findAll">;
}

interface State {
  books: Book[];
}

export const BookOverviewContainer: FC<Props> = ({ bookService }) => {
  const [state, setState] = useState<State>({
    books: [],
  });

  useEffect(() => {
    bookService.findAll().then((books) => setState({ books }));
  }, [bookService, setState]);

  return <BookOverview books={state.books} />;
};
