<?php

namespace App\Http\Requests\Authors;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAuthorsRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'author_names' => ['sometimes', 'string'],
            'author_last_names' => ['sometimes', 'string'],
        ];
    }
}
