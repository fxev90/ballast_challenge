<?php

namespace App\Models;

use App\Filters\BookFilters;
use Essa\APIToolKit\Filters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Book extends Model
{
    use HasFactory, Filterable;

    protected string $default_filters = BookFilters::class;

    /**
     * Mass-assignable attributes.
     *
     * @var array
     */
    protected $fillable = [
        'book_title',
        'book_isbn',
        'authors_id',
        'genre_id',
        'book_copies'
    ];


}
