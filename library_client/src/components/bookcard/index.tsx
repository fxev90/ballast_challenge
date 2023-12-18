import { Book } from "@/features/librarian";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpenText } from "lucide-react";
import { Separator } from "../ui/separator";

export const BookCard: React.FC<{
  bookItem: Book;
  cb?: (id: number) => void;
  cbText?: string;
}> = function ({ bookItem, cb, cbText }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{bookItem.title}</CardTitle>
        <CardDescription>ISBN: {bookItem.isbn}</CardDescription>
      </CardHeader>
      <CardContent>
        <BookOpenText />
        <span onClick={() => cb && cb(bookItem.id)}>{cbText}</span>
        <Separator />
        <div>
          {bookItem.author_name} {bookItem.author_last_name}
        </div>
        Genre: {bookItem.genre_name}
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
};
