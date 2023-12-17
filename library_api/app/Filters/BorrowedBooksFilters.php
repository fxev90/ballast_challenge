<?php

namespace App\Filters;

use Essa\APIToolKit\Filters\QueryFilters;

class BorrowedBooksFilters extends QueryFilters
{
    protected array $allowedFilters = ['borrowed_date', 'due_date', 'returned_date', 'borrower_email', 'book_isbn', 'librarian', 'book_id'];

    protected array $columnSearch =  ['borrower_email', 'book_isbn', 'librarian', 'book_id'];
}
