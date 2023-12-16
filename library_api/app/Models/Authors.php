<?php

namespace App\Models;

use App\Filters\AuthorsFilters;
use Essa\APIToolKit\Filters\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Authors extends Model
{
    use HasFactory, Filterable;

    protected string $default_filters = AuthorsFilters::class;

    /**
     * Mass-assignable attributes.
     *
     * @var array
     */
    protected $fillable = [
        "author_names",
        "author_last_names"
    ];


}
