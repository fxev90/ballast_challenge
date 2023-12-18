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
    }
}
