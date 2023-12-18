import React from "react";
import storage from "@/utils/storage";
import { useBorrowedBooks } from "..";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Dashboard: React.FC = () => {
  const user = storage.getUser();
  const { data } = useBorrowedBooks({ email: user?.email ?? "" });

  return (
    <div className="p-4 ">
      <h1>Your Borrowed Books</h1>
      <div className="flex flex-wrap gap-2 m-4">
        {data?.data.map((book, index) => {
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
    </div>
  );
};
