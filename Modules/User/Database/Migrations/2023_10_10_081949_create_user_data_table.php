<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
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
        Schema::create('user_data', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_type_id');
            $table->bigInteger('user_id');
            $table->integer('country_id');
            $table->integer('postal_code');
            $table->string('first_name')->index();
            $table->string('middle_name')->index();
            $table->string('last_name')->index();
            $table->text('address');
            $table->string('telephone_number')->nullable();
            $table->string('mobile_number')->index();
            $table->string('email')->unique()->index();
            $table->date('date_of_birth');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_data');
    }
};
