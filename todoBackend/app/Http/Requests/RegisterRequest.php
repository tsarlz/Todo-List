<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name'=>['required', 'string' ,'max:155'],
            'last_name'=>['required', 'string', 'max:155'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'password' => [
            'required',
            'string',
            'min:8', // Minimum 8 characters
            /* 'regex:/[a-z]/', // At least one lowercase letter
            'regex:/[A-Z]/', // At least one uppercase letter
            'regex:/[0-9]/', // At least one digit
            'regex:/[@$!%*?&#]/', // At least one special character
            'confirmed', // Requires a matching password_confirmation field */
        ],
        ];
    }
}
