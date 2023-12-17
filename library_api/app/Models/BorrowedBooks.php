<?php

namespace App\Models;

use App\Filters\BorrowedBooksFilters;
use Essa\APIToolKit\Filters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class BorrowedBooks extends Model
{
    use HasFactory, Filterable;

    protected string $default_filters = BorrowedBooksFilters::class;

    /**
     * Mass-assignable attributes.
     *
     * @var array
     */
    protected $table = "borrowings_view";
    protected $fillable = [
        
    ];


}
