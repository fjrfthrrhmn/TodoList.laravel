<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    //
    function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'icon' => 'nullable|string|min:0|max:2',
            'deadline' => 'required',
            'priority' => 'nullable|in:low,medium,high,urgent'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->errors())->withInput();
        }

        Project::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'icon' => $request->icon,
            'priority' => $request->priority,
            'deadline' => $request->deadline,
        ]);

        return to_route('project.manager');
    }

    function destory(String $id)
    {
        Project::find($id)->delete();
        return to_route('project.manager');
    }
}
