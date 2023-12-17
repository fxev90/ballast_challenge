<?php

namespace App\Filters;

use Essa\APIToolKit\Filters\QueryFilters;

class UsersDueBookFilters extends QueryFilters
{
    protected array $allowedFilters = [            
    'names',
    'last_names',
    'email',
    'user_type',
    'borrowings_due_count'
    ];

    protected array $columnSearch = [
        'names',
        'last_names',
        'email'
    ];
}
