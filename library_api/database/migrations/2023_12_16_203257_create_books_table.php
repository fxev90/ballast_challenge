<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Authors;
use App\Models\Genre;
return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('book_title')->nullable();
            $table->string('book_isbn')->nullable();
            $table->foreignIdFor(Authors::class)->nullable()->constrained();
            $table->foreignIdFor(Genre::class)->nullable()->constrained();
            $table->integer('book_copies')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
