<?php

namespace App\Http\Resources\Book;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            
            'created_at' => dateTimeFormat($this->created_at),
            'updated_at' => dateTimeFormat($this->updated_at),
        ];
    }
}
