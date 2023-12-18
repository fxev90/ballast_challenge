<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Book;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BookTest extends TestCase
{
    use  RefreshDatabase;

    protected string $endpoint = '/api/books';
    protected string $tableName = 'books';

    public function setUp(): void
    {
        parent::setUp();
    }
    public function parseArray($inputArray){

        // Define a mapping of old keys to new keys
        $keyMapping = [
            "book_title" => "title",
            "book_isbn" => "isbn",
            "authors_id" => "author",
            "genre_id" => "genre",
            "book_copies" => "copies"
        ];
        
        // Create a new array with the updated keys
        $outputArray = [];
        foreach ($inputArray as $oldKey => $value) {
            $newKey = $keyMapping[$oldKey];
            $outputArray[$newKey] = $value;
        }
        return $outputArray;
    }
    public function testCreateBook(): void
    {

        $this->actingAs(User::factory()->create());

        $payload = Book::factory()->make([])->toArray();
        $payload = $this->parseArray($payload);
        $this->json('POST', $this->endpoint, $payload)
            ->assertStatus(201)
            ->assertSee($payload['title']);

        $this->assertDatabaseHas($this->tableName, ['id' => 1]);
    }

    public function testViewAllBooksSuccessfully(): void
    {

        $this->actingAs(User::factory()->create());

        Book::factory(5)->create();

        $this->json('GET', $this->endpoint)
            ->assertStatus(200)
            ->assertJsonCount(5, 'data')
            ->assertSee(Book::inRandomOrder()->first()->book_title);
    }

    public function testViewAllBooksByFooFilter(): void
    {

        $this->actingAs(User::factory()->create());

        Book::factory(5)->create();

        $this->json('GET', $this->endpoint.'?foo=1')
            ->assertStatus(200)
            ->assertDontSee('foo');
    }

    public function testsCreateBookValidation(): void
    {

        $this->actingAs(User::factory()->create());

        $data = [
            "title" => "",
            "isbn" => "",
        ];

        $this->json('post', $this->endpoint, $data)
            ->assertStatus(422);
    }

    public function testViewBookData(): void
    {

        $this->actingAs(User::factory()->create());

        Book::factory()->create();
        $book = Book::all()->first();
        $this->json('GET', $this->endpoint.'/'.$book->id)
            ->assertSee($book->book_title)
            ->assertStatus(200);
    }

    public function testUpdateBook(): void
    {


        $this->actingAs(User::factory()->create());

        $book = Book::factory()->create();

        $payload = [
            'title' => 'Random'
        ];

        $this->json('PUT', $this->endpoint.'/'.$book->id, $payload)
            ->assertStatus(200)
            ->assertSee($payload['title']);
    }

    public function testDeleteBook(): void
    {

        $this->actingAs(User::factory()->create());

        $book = Book::factory()->create();

        $this->json('DELETE', $this->endpoint.'/'.$book->id)
            ->assertStatus(204);

        $this->assertEquals(0, Book::count());
    }
    
}
