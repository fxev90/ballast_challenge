<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookView\UpdateBookViewRequest;
use App\Http\Requests\BookView\CreateBookViewRequest;
use App\Http\Resources\BookView\BookViewResource;
use App\Models\BookView;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Essa\APIToolKit\Api\ApiResponse;
class BookViewController extends Controller
{
    use ApiResponse;
    public function __construct()
    {

    }

    public function index(): AnonymousResourceCollection
    {
        $bookViews = BookView::useFilters()->dynamicPaginate();

        return BookViewResource::collection($bookViews);
    }


    public function show(BookView $bookView): JsonResponse
    {
        return $this->responseSuccess(null, new BookViewResource($bookView));
    }


}
