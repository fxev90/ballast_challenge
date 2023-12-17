<?php

namespace App\Http\Resources\Book;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->book_title,
            'isbn' => $this->book_isbn,
            'author' => "{$this->author->author_names} {$this->author->author_last_names}",
            'genre'=> optional($this->genre)->genre_name,
            'copies' => $this->book_copies,
            'created_at' => dateTimeFormat($this->created_at),
            'updated_at' => dateTimeFormat($this->updated_at),
        ];
    }
}
