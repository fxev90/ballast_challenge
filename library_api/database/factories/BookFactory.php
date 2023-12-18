<?php

namespace Database\Factories;

use App\Models\Authors;
use App\Models\Book;
use App\Models\Genre;
use Illuminate\Database\Eloquent\Factories\Factory;

class BookFactory extends Factory
{
    protected $model = Book::class;
    public function definition(): array
    {
        return [
            'book_title' => $this->faker->sentence(4),
            'book_isbn' => $this->faker->isbn13(),
            'authors_id' => createOrRandomFactory(Authors::class),
            'genre_id' => createOrRandomFactory(Genre::class),
            'book_copies' => $this->faker->randomDigitNotZero(),
        ];
    }
}
