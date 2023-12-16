<?php

namespace App\Http\Resources\BookView;

use Illuminate\Http\Resources\Json\JsonResource;

class BookViewResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->book_id,
            'title' => $this->title,
            'isbn' => $this->isbn,
            'author_name' => $this->author_names,
            'author_last_name' => $this->author_last_names,
            'genre_name' => $this->genre_name
        ];
    }
}
