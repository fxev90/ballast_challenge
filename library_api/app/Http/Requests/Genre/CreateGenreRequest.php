<?php

namespace App\Http\Requests\Genre;

use Illuminate\Foundation\Http\FormRequest;

class CreateGenreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            "genre_name" => "required|string|max:255",
        ];
    }
}
