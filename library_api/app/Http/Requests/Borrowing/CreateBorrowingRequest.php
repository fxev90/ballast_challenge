<?php

namespace App\Http\Requests\Borrowing;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Book;
use App\Models\Borrowing;
class CreateBorrowingRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'book_id' => [
                'required',
                'exists:books,id',
                'unique:borrowings,book_id,NULL,id,returned_date,NULL,user_id,' . auth()->user()->id,
                function ($attribute, $value, $fail) {
                    // Check if there are any unreturned borrowings for the selected book and counthow many
                    $countUnreturnedBorrowings = Borrowing::where('book_id', $value)->whereNull('returned_date')->count();
    
                    if ($countUnreturnedBorrowings >= Book::find($value)->book_copies) {
                        $fail("The selected book has no more available copies to borrow.");
                    }
                },
                ],
            "user_id" => "required",
            'due_date' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'book_id.required' => 'The book ID is required.',
            'book_id.exists' => 'The selected book does not exist.',
            'book_id.unique' => 'You have already borrowed this book and it has not been returned yet.',
            'due_date.required' => 'The due date is required.',
        ];
    }
}
