<?php

namespace App\Models;

use App\Filters\BorrowingFilters;
use Essa\APIToolKit\Filters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Borrowing extends Model
{
    use HasFactory, Filterable;

    protected string $default_filters = BorrowingFilters::class;

    /**
     * Mass-assignable attributes.
     *
     * @var array
     */
    protected $fillable = [
        'book_id',
        'user_id',
        'received_by',
        'due_date',
        'returned_at'
    ];


}
