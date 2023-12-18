<?php

namespace App\Http\Requests\Book;

use Illuminate\Foundation\Http\FormRequest;

class CreateBookRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'isbn' => 'required|string|max:255|regex:/^\d{3}\d{10}$/|unique:books,book_isbn',
            'author' => 'required|exists:authors,id|integer', 
            'genre' => 'required|exists:genres,id|integer', 
            'copies' => 'required|integer',
        ];
    }
}
