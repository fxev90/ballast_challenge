<?php

namespace App\Http\Resources\Authors;

use Illuminate\Http\Resources\Json\JsonResource;

class AuthorsResource extends JsonResource
{
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'names' => $this->author_names,
            'last_names'=> $this->author_last_names,
            'created_at' => dateTimeFormat($this->created_at),
            'updated_at' => dateTimeFormat($this->updated_at),
        ];
    }
}
