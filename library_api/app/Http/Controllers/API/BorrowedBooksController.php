<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\BorrowedBooks\UpdateBorrowedBooksRequest;
use App\Http\Requests\BorrowedBooks\CreateBorrowedBooksRequest;
use App\Http\Resources\BorrowedBooks\BorrowedBooksResource;
use App\Models\BorrowedBooks;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class BorrowedBooksController extends Controller
{
    public function __construct()
    {

    }

    public function index(): AnonymousResourceCollection
    {
        $borrowedBooks = BorrowedBooks::useFilters()->dynamicPaginate();

        return BorrowedBooksResource::collection($borrowedBooks);
    }


    public function show(BorrowedBooks $borrowedBooks): JsonResponse
    {
        return $this->responseSuccess(null, new BorrowedBooksResource($borrowedBooks));
    }

}
