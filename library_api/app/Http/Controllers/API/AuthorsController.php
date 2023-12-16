<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Authors\UpdateAuthorsRequest;
use App\Http\Requests\Authors\CreateAuthorsRequest;
use App\Http\Resources\Authors\AuthorsResource;
use App\Models\Authors;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Essa\APIToolKit\Api\ApiResponse;

class AuthorsController extends Controller
{
    use ApiResponse;
    public function __construct()
    {

    }

    public function index(): AnonymousResourceCollection
    {
        $authors = Authors::useFilters()->dynamicPaginate();

        return AuthorsResource::collection($authors);
    }

    public function store(CreateAuthorsRequest $request): JsonResponse
    {
        $author = Authors::create($request->validated());

        return $this->responseCreated('Authors created successfully', new AuthorsResource($author));
    }

    public function show(Authors $author): JsonResponse
    {
        return $this->responseSuccess(null, new AuthorsResource($author));
    }

    public function update(UpdateAuthorsRequest $request, Authors $author): JsonResponse
    {
        $author->update($request->validated());

        return $this->responseSuccess('Authors updated Successfully', new AuthorsResource($authors));
    }

    public function destroy(Authors $authors): JsonResponse
    {
        $authors->delete();

        return $this->responseDeleted();
    }


}
