<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pet>
 */
class PetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // $imagePath = $this->faker->image(public_path('public/images/pets'), 400, 300, 'cats', false);
        return [
            'name' => fake()->name(),
            'gender' => fake()->randomElement(['male', 'female']),
            'category' => fake()->randomElement(['cat', 'dog','bird','rabbit']),
            'image'=>fake()->image(public_path('/storage')),
            'description'=>fake()->text(),
            'title'=>fake()->title(),
            'age'=>fake()->numberBetween(1,10),
            'email' => fake()->unique()->safeEmail(),
            'status'=>fake()->randomElement(['available','adopted']),
            'user_id' => User::factory(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }
}
