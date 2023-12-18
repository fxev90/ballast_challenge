<?php

namespace Database\Seeders;

use App\Models\Borrowing;
use Illuminate\Database\Seeder;

class BorrowingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        Borrowing::factory(40)->create();
    }
}
