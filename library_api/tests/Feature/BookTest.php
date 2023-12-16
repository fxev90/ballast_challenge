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

    public function testCreateBook(): void
    {
        $this->markTestIncomplete('This test case needs review.');

        $this->actingAs(User::factory()->create());

        $payload = Book::factory()->make([])->toArray();

        $this->json('POST', $this->endpoint, $payload)
             ->assertStatus(201)
             ->assertSee($payload['name']);

        $this->assertDatabaseHas($this->tableName, ['id' => 1]);
    }

    public function testViewAllBooksSuccessfully(): void
    {
        $this->markTestIncomplete('This test case needs review.');

        $this->actingAs(User::factory()->create());

        Book::factory(5)->create();

        $this->json('GET', $this->endpoint)
             ->assertStatus(200)
             ->assertJsonCount(5, 'data')
             ->assertSee(Book::first(rand(1, 5))->name);
    }

    public function testViewAllBooksByFooFilter(): void
    {
        $this->markTestIncomplete('This test case needs review.');

        $this->actingAs(User::factory()->create());

        Book::factory(5)->create();

        $this->json('GET', $this->endpoint.'?foo=1')
             ->assertStatus(200)
             ->assertSee('foo')
             ->assertDontSee('foo');
    }

    public function testsCreateBookValidation(): void
    {
        $this->markTestIncomplete('This test case needs review.');

        $this->actingAs(User::factory()->create());

        $data = [
        ];

        $this->json('post', $this->endpoint, $data)
             ->assertStatus(422);
    }

    public function testViewBookData(): void
    {
        $this->markTestIncomplete('This test case needs review.');

        $this->actingAs(User::factory()->create());

        Book::factory()->create();

        $this->json('GET', $this->endpoint.'/1')
             ->assertSee(Book::first()->name)
             ->assertStatus(200);
    }

    public function testUpdateBook(): void
    {
        $this->markTestIncomplete('This test case needs review.');

        $this->actingAs(User::factory()->create());

        Book::factory()->create();

        $payload = [
            'name' => 'Random'
        ];

        $this->json('PUT', $this->endpoint.'/1', $payload)
             ->assertStatus(200)
             ->assertSee($payload['name']);
    }

    public function testDeleteBook(): void
    {
        $this->markTestIncomplete('This test case needs review.');

        $this->actingAs(User::factory()->create());

        Book::factory()->create();

        $this->json('DELETE', $this->endpoint.'/1')
             ->assertStatus(204);

        $this->assertEquals(0, Book::count());
    }
    
}
