<?php

namespace App\Filters;

use Essa\APIToolKit\Filters\QueryFilters;

class BookViewFilters extends QueryFilters
{
    protected array $allowedFilters = [];

    protected array $columnSearch = [];
}
