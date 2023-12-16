<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Authors\UpdateAuthorsRequest;
use App\Http\Requests\Authors\CreateAuthorsRequest;
use App\Http\Resources\Authors\AuthorsResource;
use App\Models\Authors;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class AuthorsController extends Controller
{
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
        $authors = Authors::create($request->validated());

        return $this->responseCreated('Authors created successfully', new AuthorsResource($authors));
    }

    public function show(Authors $authors): JsonResponse
    {
        return $this->responseSuccess(null, new AuthorsResource($authors));
    }

    public function update(UpdateAuthorsRequest $request, Authors $authors): JsonResponse
    {
        $authors->update($request->validated());

        return $this->responseSuccess('Authors updated Successfully', new AuthorsResource($authors));
    }

    public function destroy(Authors $authors): JsonResponse
    {
        $authors->delete();

        return $this->responseDeleted();
    }

   
}
