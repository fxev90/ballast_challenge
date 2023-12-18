<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::statement('
            CREATE OR REPLACE VIEW  borrowings_view AS
            SELECT
                br.id,
                br.created_at AS borrowed_date,
                br.due_date,
                br.returned_date,
                users.email AS borrower_email,
                books.id as book_id,
                books.book_title,
                books.book_isbn,
                lib.email AS librarian
            FROM
                borrowings AS br
            JOIN
                users ON br.user_id = users.id
            JOIN
                books ON br.book_id = books.id
            LEFT JOIN
                users AS lib ON lib.id = br.received_by
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        \DB::statement('DROP VIEW IF EXISTS borrowings_view');
    }
};
