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
            $table->string('employee_id')->unique('employee_id')->index('employee_id');
            $table->bigInteger('user_id');
            $table->integer('country_id');
            $table->string('first_name')->index('first_name');
            $table->string('middle_name')->index('middle_name');
            $table->string('last_name')->index('last_name');
            $table->integer('postal_code');
            $table->text('address');
            $table->string('telephone_number')->nullable();
            $table->string('mobile_number')->index('mobile_number');
            $table->string('email')->unique('email')->index('email');
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
