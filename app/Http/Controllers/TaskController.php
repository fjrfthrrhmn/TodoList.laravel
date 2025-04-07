<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    //
    function store(Request $request, String $id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'string|max:225',
            'description' => 'string|max:225',
        ]);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator->errors())->withInput();
        }

        Task::create([
            'project_id' => $id,
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return redirect()->back();
    }

    // 
    function destroy(String $id)
    {
        Task::findOrFail($id)->delete();
        return redirect()->back();
    }

    // 
    function changeStatus(Request $request, String $id)
    {
        Task::findOrFail($id)->update([ 'status' => $request->status ]);
        return redirect()->back();
    }
}
