<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Todo;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create 10 users, each with 5 todos
        User::factory(10)->create()->each(function ($user) {
            Todo::factory(5)->create([
                'user_id' => $user->id, // Associate todos with the created user
            ]);
        });
    }
}
