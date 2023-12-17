<?php

namespace App\Http\Requests\Book;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBookRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => 'sometimes|string|max:255',
            'isbn' => [
                'sometimes',
                'string',
                'max:255',
                'regex:/^\d{3}-\d{10}$/',
                'unique:books,book_isbn,' . $this->route('book')->id, // Ignore the current book being updated
            ],
            'author' => 'sometimes|exists:authors,id|integer',
            'genre' => 'sometimes|exists:genres,id|integer',
            'copies' => 'sometimes|integer',
        ];
    }
}
