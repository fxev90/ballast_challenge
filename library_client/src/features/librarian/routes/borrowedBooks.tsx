import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useDueBook, useOverdueBook } from "../api/bookviews";

export const BorrowedLibraryBooks: React.FC = () => {
  const today = new Date();
  const { data: dueBooks } = useDueBook({
    due_date: today.toISOString().split("T")[0],
  });
  const { data: overdueBooks } = useOverdueBook();

  return (
    <div className="p-4 ">
      <h1>Books due today</h1>
      <div className="flex flex-wrap gap-2 m-4">
        {dueBooks?.data.map((book, index) => {
          const bookKeys = Object.keys(book).filter(
            (value) => value !== "book_title"
          );
          const bookMap = book as unknown as Record<string, string>;
          return (
            <Card key={`borrowed-book-${book.book_id}-${index}`}>
              <CardHeader>{book.book_title}</CardHeader>
              <Separator />
              <CardContent>
                {bookKeys.map((bookKey) => (
                  <div className="font-semibold">
                    {bookKey} : {bookMap[bookKey]}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          );
        })}
      </div>
      <h1>Overdue books</h1>
      <div className="flex flex-wrap gap-2 m-4">
        {overdueBooks?.data.map((book, index) => {
          const bookKeys = Object.keys(book).filter(
            (value) => value !== "book_title"
          );
          const bookMap = book as unknown as Record<string, string>;
          return (
            <Card key={`overdue-book-${book.book_id}-${index}`}>
              <CardHeader>{book.book_title}</CardHeader>
              <Separator />
              <CardContent>
                {bookKeys.map((bookKey) => (
                  <div className="font-semibold">
                    {bookKey} : {bookMap[bookKey]}
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
