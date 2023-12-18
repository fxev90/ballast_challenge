<?php

namespace Database\Factories;

use App\Models\Book;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class BorrowingFactory extends Factory
{
    public function definition(): array
    {
        return [
            'book_id' => createOrRandomFactory(Book::class),
            'user_id' => createOrRandomFactory(User::class),
            'received_by' => createOrRandomFactory(User::class),
            'due_date' => $this->faker->dateTimeBetween('+1 day', '+1 week'),
            'returned_date' => $this->faker->optional()->dateTimeBetween('+1 week', '+2 week'),
        ];
    }
}
