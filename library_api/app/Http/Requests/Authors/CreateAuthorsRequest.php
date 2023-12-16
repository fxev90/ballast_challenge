<?php

namespace App\Http\Requests\Authors;

use Illuminate\Foundation\Http\FormRequest;

class CreateAuthorsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'author_names' => ['required', 'string'],
            'author_last_names' => ['required', 'string'],
        ];
    }
}
