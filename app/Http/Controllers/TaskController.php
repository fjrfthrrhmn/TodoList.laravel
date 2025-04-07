<?php

namespace App\Http\Controllers;

use App\Http\Resources\ApiResponse;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use OpenApi\Attributes as OA;


class TaskController extends Controller
{
    //
    function store(Request $request, string $id)
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
    function destroy(string $id)
    {
        Task::findOrFail($id)->delete();
        return redirect()->back();
    }

    // 
    function changeStatus(Request $request, string $id)
    {
        Task::findOrFail($id)->update(['status' => $request->status]);
        return redirect()->back();
    }

    // SWAGGER


    #[OA\Get(path: '/api/task/list', tags: ['Tasks'], summary: 'Get all tasks')]
    #[OA\Response(response: '200', description: 'Data ditemukan')]
    public function indexApi()
    {
        return ApiResponse::success(['data' => Task::orderByDesc('id')->get()]);
    }

    #[OA\Get(path: '/api/task/detail/{id}', tags: ['Tasks'], summary: 'Get detail task')]
    #[OA\Parameter(name: 'id', in: 'path', required: true, description: 'ID of the task')]
    #[OA\Response(response: '200', description: 'Data ditemukan')]
    #[OA\Response(response: '404', description: 'Data tidak ditemukan')]
    public function showApi(string $id)
    {
        $task = Task::find($id);

        if (!$task) {
            return ApiResponse::error('Task tidak ditemukan', 404);
        }

        return ApiResponse::success(['data' => $task]);
    }

    #[OA\Post(path: '/api/task/store/{project_id}', summary: 'Create new task', tags: ['Tasks'],
        parameters: [
            new OA\Parameter(name: 'project_id', in: 'path', required: true, description: 'ID of the project')
        ],
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                required: ['title', 'description'],
                properties: [
                    new OA\Property(property: 'title', type: 'string', example: 'Mengerjakan halaman login'),
                    new OA\Property(property: 'description', type: 'string', example: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.'),
                ]
            )
        )
    )]
    #[OA\Response(response: '200', description: 'Task berhasil ditambahkan')]
    #[OA\Response(response: '500', description: 'Terjadi kesalahan')]
    public function storeApi(Request $request, string $project_id)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:225',
            'description' => 'required|string|max:225',
        ]);

        if ($validator->fails()) {
            return ApiResponse::error($validator->errors()->all());
        }

        $task = Task::create([
            'project_id' => $project_id,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return ApiResponse::success(['data' => $task]);
    }

    #[OA\Delete(path: '/api/task/delete/{id}', tags: ['Tasks'], summary: 'Delete a task')]
    #[OA\Parameter(name: 'id', in: 'path', required: true, description: 'ID of the task')]
    #[OA\Response(response: '200', description: 'Task berhasil dihapus')]
    #[OA\Response(response: '404', description: 'Task tidak ditemukan')]
    public function destroyApi(string $id)
    {
        $task = Task::find($id);
        if (!$task) {
            return ApiResponse::error('Task tidak ditemukan', 404);
        }

        $task->delete();
        return ApiResponse::success(['message' => 'Task berhasil dihapus']);
    }

    #[OA\Put(
        path: '/api/task/change-status/{id}',
        summary: 'Update task status',
        tags: ['Tasks'],
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                required: ['status'],
                properties: [
                    new OA\Property(property: 'status', type: 'string', example: 'completed'),
                ]
            )
        ),
        parameters: [
            new OA\Parameter(name: 'id', in: 'path', required: true, description: 'ID of the task'),
        ]
    )]
    #[OA\Response(response: '200', description: 'Status task diperbarui')]
    #[OA\Response(response: '404', description: 'Task tidak ditemukan')]
    public function changeStatusApi(Request $request, string $id)
    {
        $task = Task::find($id);
        if (!$task) {
            return ApiResponse::error('Task tidak ditemukan', 404);
        }

        $task->update(['status' => $request->status]);
        return ApiResponse::success(message: 'Status berhasil diperbarui');
    }
}
