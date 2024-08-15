<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->date('start_date');
            $table->time('start_time');
            $table->time('end_time');
            $table->integer('seat_limit');
            $table->string('location');
            $table->enum('status', ['active', 'not_active'])->default('active');
            $table->enum('event_type', ['free', 'ticketed'])->default('ticketed');
            $table->foreignId('category_id')->references('id')->on('categories')->noActionOnDelete();
            $table->foreignId('created_by')->references('id')->on('users')->noActionOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
