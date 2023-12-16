<?php

namespace App\Filters;

use Essa\APIToolKit\Filters\QueryFilters;

class BookViewFilters extends QueryFilters
{
    protected array $allowedFilters = ['title', 'isbn', 'author_names', 'author_last_names', 'genre_name', 'copies'];

    protected array $columnSearch = ['title', 'isbn', 'author_names', 'author_last_names', 'genre_name', 'copies'];
}
