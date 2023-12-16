<?php

namespace Database\Seeders;

use App\Models\Authors;
use Illuminate\Database\Seeder;

class AuthorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        Authors::factory(10)->create();
    }
}
