<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\BorrowedBooks\UpdateBorrowedBooksRequest;
use App\Http\Requests\BorrowedBooks\CreateBorrowedBooksRequest;
use App\Http\Resources\BorrowedBooks\BorrowedBooksResource;
use App\Models\BorrowedBooks;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Carbon;

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

    public function booksOverdue(): AnonymousResourceCollection
    {
        $borrowedBooks = BorrowedBooks::whereNull('returned_date')->where('due_date', '<=', Carbon::today())->useFilters()->dynamicPaginate();

        return BorrowedBooksResource::collection($borrowedBooks);
    }

}
