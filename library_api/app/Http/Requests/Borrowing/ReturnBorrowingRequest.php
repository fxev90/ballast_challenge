<?php

namespace App\Http\Requests\Borrowing;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Borrowing;
class ReturnBorrowingRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'id' => [
                'required',
                'exists:borrowings,id',
                function ($attribute, $value, $fail) {
                    // Check if the selected book has been returned
                    $returned = Borrowing::where('id', $value)->whereNotNull('returned_date')->exists();
    
                    if ($returned) {
                        $fail("The selected book has already been returned.");
                    }
                },
                ],
        ];
    }

    public function messages(): array
    {
        return [
        ];
    }
}