<?php

namespace App\Http\Controllers\API;

use App\Actions\ReturnBook;
use App\Http\Controllers\Controller;
use App\Http\Requests\Borrowing\ReturnBorrowingRequest;
use App\Http\Requests\Borrowing\UpdateBorrowingRequest;
use App\Http\Requests\Borrowing\CreateBorrowingRequest;
use App\Http\Resources\Borrowing\BorrowingResource;
use App\Models\Borrowing;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Essa\APIToolKit\Api\ApiResponse;
class BorrowingController extends Controller
{
    use ApiResponse;
    public function __construct()
    {

    }

    public function index(): AnonymousResourceCollection
    {
        $borrowings = Borrowing::useFilters()->dynamicPaginate();

        return BorrowingResource::collection($borrowings);
    }

    public function store(CreateBorrowingRequest $request): JsonResponse
    {
        $borrowing = Borrowing::create($request->validated());

        return $this->responseCreated('Borrowing created successfully', new BorrowingResource($borrowing));
    }

    public function show(Borrowing $borrowing): JsonResponse
    {
        return $this->responseSuccess(null, new BorrowingResource($borrowing));
    }

    public function update(UpdateBorrowingRequest $request, Borrowing $borrowing): JsonResponse
    {
        $borrowing->update($request->validated());

        return $this->responseSuccess('Borrowing updated Successfully', new BorrowingResource($borrowing));
    }

    public function destroy(Borrowing $borrowing): JsonResponse
    {
        $borrowing->delete();

        return $this->responseDeleted();
    }

    public function returnsBook(ReturnBorrowingRequest $request ,Borrowing $borrowing)
    {
        app(ReturnBook::class)->execute($borrowing);
        return $this->responseSuccess('Book returned Successfully', new BorrowingResource($borrowing));
    }

    public function totalBorrowed(){
        $totalBorrowed = \DB::table('borrowings')->whereNull('returned_date')->count('*');
        $response = [
            "status" => 200,
            "message" => "Total of borrowed books  in the library",
            "data" => [
                "total_borrowed_books" => $totalBorrowed 
            ],
        ];
        return response()->json($response);
    }
}
