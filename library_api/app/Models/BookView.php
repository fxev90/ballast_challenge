<?php

namespace App\Models;

use App\Filters\BookViewFilters;
use Essa\APIToolKit\Filters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class BookView extends Model
{
    use HasFactory, Filterable;

    protected string $default_filters = BookViewFilters::class;

    /**
     * Mass-assignable attributes.
     *
     * @var array
     */
    protected $fillable = [
        
    ];


}
