<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Authors;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthorsTest extends TestCase
{
    use  RefreshDatabase;

    protected string $endpoint = '/api/authors';
    protected string $tableName = 'authors';

    public function setUp(): void
    {
        parent::setUp();
    }

    public function testCreateAuthors(): void
    {
        

        $this->actingAs(User::factory()->create());

        $payload = Authors::factory()->make([])->toArray();

        $this->json('POST', $this->endpoint, $payload)
            ->assertStatus(201)
            ->assertSee($payload['author_names']);

        $this->assertDatabaseHas($this->tableName, ['id' => 1]);
    }

    public function testViewAllAuthorsSuccessfully(): void
    {


        $this->actingAs(User::factory()->create());

        Authors::factory(5)->create();

        $this->json('GET', $this->endpoint)
            ->assertStatus(200)
            ->assertJsonCount(5, 'data')
            ->assertSee( Authors::inRandomOrder()->first()->author_names);
    }

    public function testViewAllAuthorsByFooFilter(): void
    {


        $this->actingAs(User::factory()->create());

        Authors::factory(5)->create();

        $this->json('GET', $this->endpoint.'?foo=1')
            ->assertStatus(200)
            ->assertDontSee('foo');
    }

    public function testsCreateAuthorValidation(): void
    {
        
        $this->actingAs(User::factory()->create());

        $data = [
            "author_names" => "",
            "author_last_names" => ""
        ];

        $this->json('post', $this->endpoint, $data)
            ->assertStatus(422);
    }

    public function testViewAuthorsData(): void
    {

        $this->actingAs(User::factory()->create());

        Authors::factory()->create();
        $randomAuthor = Authors::inRandomOrder()->first();
        $this->json('GET', $this->endpoint.'/'.$randomAuthor->id)
            ->assertSee(Authors::find($randomAuthor->id)->author_names)
            ->assertStatus(200);
    }

    public function testUpdateAuthors(): void
    {
        $this->actingAs(User::factory()->create());

        Authors::factory()->create();
        $author =  Authors::inRandomOrder()->first();
        $payload = [
            'author_names' => 'Random'
        ];

        $this->json('PUT', $this->endpoint.'/'.$author->id, $payload)
            ->assertStatus(200)
            ->assertSee($author->names);
    }

    public function testDeleteAuthors(): void
    {

        $this->actingAs(User::factory()->create());
        Authors::factory(1)->create();
        $author =  Authors::all()->first();
        $this->json('DELETE', $this->endpoint.'/'.$author->id)
            ->assertStatus(204);
        $this->assertEquals(1, Authors::count());
    }
    
}
