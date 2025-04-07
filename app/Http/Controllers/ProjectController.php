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
            'title' => 'required|string|max:225',
            'description' => 'required|string|max:225',
            'icon' => 'nullable|string|min:0|max:2',
            'priority' => 'nullable|in:low,medium,high,urgent',
            'deadline' => 'required',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->errors())->withInput();
        }

        Project::create([
            'user_id' => Auth::id(),
            'title' => $request->title,
            'description' => $request->description,
            'icon' => $request->icon ?? '📝',
            'priority' => $request->priority ?? 'medium',
            'deadline' => $request->deadline,
        ]);

        return to_route('project.manager');
    }

    function destory(String $id)
    {
        Project::findOrFail($id)->delete();
        return redirect()->back();
    }

    function update(Request $request, String $id)
    {
        Project::findOrFail($id)->update($request->all());
        return redirect()->back();
    }
}
