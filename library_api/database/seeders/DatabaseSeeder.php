<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'names' => 'admin',
            'last_names' => 'Administrator',
            'email' => env('DEMO_EMAIL','admin@example.com'),
            'user_type' => 'Librarian',
            'password' =>  bcrypt(env('DEMO_PASSWORD','123456789')),
        ]);
        \App\Models\User::factory()->create([
            'names' => 'User',
            'last_names' => 'Common',
            'email' => env('DEMO_EMAIL_USER','user@example.com'),
            'user_type' => 'Member',
            'password' =>  bcrypt(env('DEMO_PASSWORD','123456789')),
        ]);
        $this->call(AuthorsSeeder::class);
        $this->call(GenreSeeder::class);
        $this->call(BookSeeder::class);
        $this->call(BorrowingSeeder::class);
    }
}
