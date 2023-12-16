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
    protected $primaryKey = 'book_id'; 
    protected $table = 'book_view';
    /**
     * Mass-assignable attributes.
     *
     * @var array
     */
    protected $fillable = [
        
    ];


}
