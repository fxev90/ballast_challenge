<?php

use Illuminate\Database\Migrations\Migration;


return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement("
            CREATE OR REPLACE VIEW  book_view AS
            SELECT
                b.id AS book_id,
                b.book_title AS title,
                b.book_isbn AS isbn,
                b.book_copies AS copies,
                a.author_names,
                a.author_last_names,
                g.genre_name
            FROM
                books b
                JOIN authors a ON b.authors_id = a.id
                JOIN genres g ON b.genre_id = g.id
        ");
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \DB::statement('DROP VIEW IF EXISTS book_view');
    }
};
