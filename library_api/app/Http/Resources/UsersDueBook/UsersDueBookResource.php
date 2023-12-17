<?php

namespace App\Http\Resources\UsersDueBook;

use Illuminate\Http\Resources\Json\JsonResource;

class UsersDueBookResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'names' => $this->names,
            'last_names' => $this->last_names,
            'email' => $this->email,
            'user_type' => $this->user_type,
            'books_due_count' => $this->borrowings_due_count 
        ];
    }
}
