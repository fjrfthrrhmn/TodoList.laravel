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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('icon')->default('📝');
            $table->enum('priority', ['low', 'medium', 'high', 'urgent'])->default('medium');
            $table->enum('status', ['pending', 'in_progress', 'completed', 'review'])->default('pending');
            $table->enum('visibility', ['private', 'public'])->default('private');
            $table->date('deadline')->nullable();
            $table->timestamps();
            $table->softDeletes(); // Soft delete untuk menghindari penghapusan permanen

            // Foreign key untuk relasi ke tabel users
            $table->foreignId('user_id')->constrained()
                ->onDelete('cascade'); // Jika user dihapus, semua proyeknya juga ikut terhapus
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
