<?php

namespace App\Actions;
use App\Models\Borrowing;
use Illuminate\Support\Carbon;
class ReturnBook
{
    public function execute( Borrowing $borrowing) : ?Borrowing
    {
        $borrowing->returned_date = Carbon::now();
        $borrowing->received_by = auth()->user()->id;
        $borrowing->save();
        return $borrowing;
    }
}
