<?php

use Illuminate\Database\Migrations\Migration;


return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('
            CREATE VIEW borrowings_due_count_view AS
            SELECT
                users.names,
                users.last_names,
                users.email,
                users.user_type,
                COUNT(borrowings.id) AS borrowings_due_count
            FROM
                users
            JOIN
                borrowings ON users.id = borrowings.user_id AND borrowings.due_date <= CURDATE()
            GROUP BY
                users.id, users.names, users.last_names, users.email, users.user_type
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS borrowings_due_count_view');
    }
};
