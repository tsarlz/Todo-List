<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use Illuminate\Auth\Events\Validated;
use Illuminate\Support\Facades\Auth;

class TodoController 
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $todos = Todo::where('user_id', Auth::id())->get();

        return response()->json([
            'todos'=>$todos
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTodoRequest $request)
    {   
        $validatedData = $request->validated();
       $todo = Todo::create([
        'user_id'=> Auth::id(),
        'title'=> $validatedData['title'],
        'description'=> $validatedData['description'] ?? null,
        'is_completed' => $validatedData['is_compledted'] ?? false
        ]);

        return response()->json([
            'todo'=>  $todo
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        return $todo;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTodoRequest $request, Todo $todo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Todo $todo)
    {
        //
    }
}
