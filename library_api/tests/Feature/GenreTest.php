<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Genre;
use Illuminate\Foundation\Testing\RefreshDatabase;

class GenreTest extends TestCase
{
    use  RefreshDatabase;

    protected string $endpoint = '/api/genres';
    protected string $tableName = 'genres';

    public function setUp(): void
    {
        parent::setUp();
    }

    public function parseArray($inputArray){

        // Define a mapping of old keys to new keys
        $keyMapping = [
            'genre_name' => 'name',
        ];
        
        // Create a new array with the updated keys
        $outputArray = [];
        foreach ($inputArray as $oldKey => $value) {
            $newKey = $keyMapping[$oldKey];
            $outputArray[$newKey] = $value;
        }
        return $outputArray;
    }

    public function testCreateGenre(): void
    {

        $this->actingAs(User::factory()->create());

        $payload = Genre::factory()->make([])->toArray();
        $this->json('POST', $this->endpoint, $payload)
            ->assertStatus(201)
            ->assertSee($payload['genre_name']);
        $genre = Genre::all()->first();
        $this->assertDatabaseHas($this->tableName, ['id' => $genre->id]);
    }

    public function testViewAllGenresSuccessfully(): void
    {
        $this->actingAs(User::factory()->create());

        Genre::factory(5)->create();

        $this->json('GET', $this->endpoint)
            ->assertStatus(200)
            ->assertJsonCount(5, 'data')
            ->assertSee(Genre::inRandomOrder()->first()->genre_name);
    }

    public function testViewAllGenresByFooFilter(): void
    {

        $this->actingAs(User::factory()->create());

        Genre::factory(5)->create();

        $this->json('GET', $this->endpoint.'?foo=1')
             ->assertStatus(200)
             ->assertDontSee('foo');
    }

    public function testsCreateGenreValidation(): void
    {

        $this->actingAs(User::factory()->create());

        $data = [
            "genre_name" => 1231
        ];

        $this->json('post', $this->endpoint, $data)
            ->assertStatus(422);
    }

    public function testViewGenreData(): void
    {

        $this->actingAs(User::factory()->create());

        $genre = Genre::factory()->create();

        $this->json('GET', $this->endpoint.'/'.$genre->id)
            ->assertSee($genre->genre_name)
            ->assertStatus(200);
    }

    public function testUpdateGenre(): void
    {

        $this->actingAs(User::factory()->create());

        $genre = Genre::factory()->create();

        $payload = [
            'genre_name' => 'Random'
        ];

        $this->json('PUT', $this->endpoint.'/'.$genre->id, $payload)
            ->assertStatus(200)
            ->assertSee($payload['genre_name']);
    }

    public function testDeleteGenre(): void
    {

        $this->actingAs(User::factory()->create());

        $genre = Genre::factory()->create();

        $this->json('DELETE', $this->endpoint.'/'.$genre->id)
            ->assertStatus(204);

        $this->assertEquals(0, Genre::count());
    }
    
}
