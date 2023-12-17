<?php

namespace App\Actions;
use App\Models\Book;

class UpdateBook
{
    public function execute(array $data, Book $book) : ?Book
    {
        $mappingArray = [
            "title" => "book_title",
            "isbn" => "book_isbn",
            "author" => "authors_id",
            "genre" => "genre_id",
            "copies" => "book_copies"
        ];

        $resultArray = [];

        foreach ($mappingArray as $inputKey => $outputKey) {
            if (array_key_exists($inputKey, $data)) {
                $resultArray[$outputKey] = $data[$inputKey];
            }
        }
        $book->update($resultArray);
        return $book;
    }
}
