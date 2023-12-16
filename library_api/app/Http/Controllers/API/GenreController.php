<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\Genre\UpdateGenreRequest;
use App\Http\Requests\Genre\CreateGenreRequest;
use App\Http\Resources\Genre\GenreResource;
use App\Models\Genre;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Essa\APIToolKit\Api\ApiResponse;
class GenreController extends Controller
{
    use ApiResponse;
    public function __construct()
    {

    }

    public function index(): AnonymousResourceCollection
    {
        $genres = Genre::useFilters()->dynamicPaginate();

        return GenreResource::collection($genres);
    }

    public function store(CreateGenreRequest $request): JsonResponse
    {
        $genre = Genre::create($request->validated());

        return $this->responseCreated('Genre created successfully', new GenreResource($genre));
    }

    public function show(Genre $genre): JsonResponse
    {
        return $this->responseSuccess(null, new GenreResource($genre));
    }

    public function update(UpdateGenreRequest $request, Genre $genre): JsonResponse
    {
        $genre->update($request->validated());

        return $this->responseSuccess('Genre updated Successfully', new GenreResource($genre));
    }

    public function destroy(Genre $genre): JsonResponse
    {
        $genre->delete();

        return $this->responseDeleted();
    }

   
}
