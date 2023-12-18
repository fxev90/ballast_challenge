<?php

namespace Database\Factories;

use App\Models\Authors;
use Illuminate\Database\Eloquent\Factories\Factory;

class AuthorsFactory extends Factory
{
    protected $model = Authors::class;
    public function definition(): array
    {
        return [
            'author_names' => $this->faker->firstName(),
            'author_last_names' => $this->faker->lastName(),
        ];
    }
}
