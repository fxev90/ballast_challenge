<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Book\UpdateBookRequest;
use App\Http\Requests\Book\CreateBookRequest;
use App\Http\Resources\Book\BookResource;
use App\Models\Book;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Essa\APIToolKit\Api\ApiResponse;
class BookController extends Controller
{
    use ApiResponse;
    public function __construct()
    {

    }

    public function index(): AnonymousResourceCollection
    {
        $books = Book::useFilters()->dynamicPaginate();

        return BookResource::collection($books);
    }

    public function store(CreateBookRequest $request): JsonResponse
    {
        $book = Book::create($request->validated());

        return $this->responseCreated('Book created successfully', new BookResource($book));
    }

    public function show(Book $book): JsonResponse
    {
        return $this->responseSuccess(null, new BookResource($book));
    }

    public function update(UpdateBookRequest $request, Book $book): JsonResponse
    {
        $book->update($request->validated());

        return $this->responseSuccess('Book updated Successfully', new BookResource($book));
    }

    public function destroy(Book $book): JsonResponse
    {
        $book->delete();

        return $this->responseDeleted();
    }

   
}