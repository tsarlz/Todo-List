<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Todo>
 */
class TodoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(), // Create a new user or associate an existing one
            'title' => fake()->sentence(), // Generate a random title
            'description' => fake()->paragraph(), // Nullable description
            'is_completed' => fake()->boolean(), // Random true or false
            'created_at' => fake()->dateTime(), // Current timestamp
            'updated_at' => fake()->dateTime(), // Current timestamp
        ];
    }
}
