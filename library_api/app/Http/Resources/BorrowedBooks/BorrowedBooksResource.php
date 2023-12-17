<?php

namespace App\Http\Resources\BorrowedBooks;

use Illuminate\Http\Resources\Json\JsonResource;

class BorrowedBooksResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'due_date' => $this->due_date,
            'returned_date' => $this->returned_date,
            'borrowed_date' => $this->borrowed_date,
            'borrower_email' => $this->borrower_email,
            'book_id' => $this->book_id,
            'book_title' => $this->book_title,
            'book_isbn' => $this->book_isbn,
            'librarian' => $this->librarian,
        ];
    }
}
