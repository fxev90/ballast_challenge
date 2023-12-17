<?php

namespace App\Models;

use App\Filters\UsersDueBookFilters;
use Essa\APIToolKit\Filters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class UsersDueBook extends Model
{
    use HasFactory, Filterable;

    protected string $default_filters = UsersDueBookFilters::class;

    /**
     * Mass-assignable attributes.
     *
     * @var array
     */
    protected $table = 'borrowings_due_count_view';
    protected $fillable = [
        
    ];


}
