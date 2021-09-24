import React, { FC } from "react";
import { Book } from "../Book";
import Link from "next/link";
export interface Props {
  books: Book[];
}

export const BookOverview: FC<Props> = ({ books }) => (
  <div className="container">
    <table className="table table-hover table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Authors</th>
          <th scope="col">Title</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book.id}>
            <th scope="row">{index + 1}</th>
            <td>{book.authors}</td>
            <td>{book.title}</td>
            <td>
              <Link href={`/book/${book.id}`}>
                <a>&nbsp;---&gt;</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
