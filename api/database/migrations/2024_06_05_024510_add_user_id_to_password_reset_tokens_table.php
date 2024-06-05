<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddUserIdToPasswordResetTokensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('password_reset_tokens', function (Blueprint $table) {
            // Agregar columna user_id
            $table->unsignedBigInteger('user_id')->nullable();

            // Establecer la restricción de clave foránea
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('password_reset_tokens', function (Blueprint $table) {
            // Eliminar la restricción de clave foránea
            $table->dropForeign(['user_id']);

            // Eliminar la columna user_id
            $table->dropColumn('user_id');
        });
    }
}