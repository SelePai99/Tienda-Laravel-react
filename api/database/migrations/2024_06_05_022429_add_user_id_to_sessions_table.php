<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdToSessionsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('sessions', function (Blueprint $table) {
            $table->unsignedBigInteger('user_id')->nullable(); // Agrega la columna user_id
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade'); // Establece la restricción de clave foránea
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::table('sessions', function (Blueprint $table) {
            $table->dropForeign(['user_id']); // Elimina la restricción de clave foránea
            $table->dropColumn('user_id'); // Elimina la columna user_id
        });
    }
}