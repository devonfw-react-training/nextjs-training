import React, { FC, useState, useEffect } from "react";
import { Book } from "../Book";
import { BookOverview } from "./BookOverview";

export interface Props {
  books: Book[];
}

export const BookOverviewContainer: FC<Props> = ({ books }) => {
  return <BookOverview books={books} />;
};
