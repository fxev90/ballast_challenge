<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\UsersDueBook\UpdateUsersDueBookRequest;
use App\Http\Requests\UsersDueBook\CreateUsersDueBookRequest;
use App\Http\Resources\UsersDueBook\UsersDueBookResource;
use App\Models\UsersDueBook;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UsersDueBookController extends Controller
{
    public function __construct()
    {

    }

    public function index(): AnonymousResourceCollection
    {
        $usersDueBooks = UsersDueBook::useFilters()->dynamicPaginate();

        return UsersDueBookResource::collection($usersDueBooks);
    }



    public function show(UsersDueBook $usersDueBook): JsonResponse
    {
        return $this->responseSuccess(null, new UsersDueBookResource($usersDueBook));
    }


}
