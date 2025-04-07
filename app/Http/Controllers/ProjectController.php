<?php

namespace App\Http\Controllers;

use App\Http\Resources\ApiResponse;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use OpenApi\Attributes as OA;


#[OA\Info(
    title: 'My Project API',
    version: '1.0.0',
    description: 'API documentation for the project management system'
)]
#[OA\Server(url: 'http://localhost:8000', description: 'Local server')]
class ProjectController extends Controller
{
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

    function destory(string $id)
    {
        Project::findOrFail($id)->delete();
        return redirect()->back();
    }

    function update(Request $request, string $id)
    {
        Project::findOrFail($id)->update($request->all());
        return redirect()->back();
    }


    // SWAGGER


    #[OA\Get(path: '/api/project/list', tags: ['Projects'], summary: 'Get all data projects')]
    #[OA\Response(response: '200', description: 'Data Ditemukan')]
    #[OA\Response(response: '404', description: 'Data tidak ditemukan')]
    #[OA\Response(response: '500', description: 'Terjadi Kesalahan pada Server')]
    public function indexApi()
    {
        return ApiResponse::success(['data' => Project::orderByDesc('id')->get()]);
    }



    #[OA\Get(path: '/api/project/detail/{id}', tags: ['Projects'], summary: 'Get data detail projects')]
    #[OA\Parameter(name: 'id', in: 'path', required: true, description: 'ID of the project to update')]
    #[OA\Response(response: '200', description: 'Data Ditemukan')]
    #[OA\Response(response: '404', description: 'Data tidak ditemukan')]
    #[OA\Response(response: '500', description: 'Terjadi Kesalahan pada Server')]
    public function showApi(string $id)
    {
        $project = Project::find($id);

        if (!$project) {
            return ApiResponse::error(message: 'Project tidak ditemukan', status: 404);
        }

        return ApiResponse::success(['message' => 'Project berhasil diperbarui', 'data' => $project]);
    }


    #[OA\Get(path: '/api/project/trash', tags: ['Projects'], summary: 'Get all data trash projects')]
    #[OA\Response(response: '200', description: 'Data Ditemukan')]
    #[OA\Response(response: '404', description: 'Data tidak ditemukan')]
    #[OA\Response(response: '500', description: 'Terjadi Kesalahan pada Server')]
    public function trashApi()
    {
        return ApiResponse::success(['data' => Project::onlyTrashed()->get()]);
    }


    #[OA\Post(
        path: '/api/project/store',
        summary: 'Membuat project baru',
        tags: ['Projects'],
        requestBody: new OA\RequestBody(
            required: true,
            content: new OA\JsonContent(
                required: ['title', 'description', 'deadline'],
                properties: [
                    new OA\Property(property: 'title', type: 'string', example: 'Membuat UI Dashboard'),
                    new OA\Property(property: 'description', type: 'string', example: 'Bikin desain UI dashboard utama'),
                    new OA\Property(property: 'icon', type: 'string', example: '📝'),
                    new OA\Property(property: 'priority', type: 'string', enum: ['low', 'medium', 'high', 'urgent'], example: 'medium'),
                    new OA\Property(property: 'deadline', type: 'string', format: 'date', example: '2025-12-31'),
                ]
            )
        ),
    )]
    #[OA\Response(response: '200', description: 'Berhasil')]
    #[OA\Response(response: '500', description: 'Terjadi Kesalahan pada Server')]
    function storeApi(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:225',
            'description' => 'required|string|max:225',
            'icon' => 'nullable|string|min:0|max:2',
            'priority' => 'nullable|in:low,medium,high,urgent',
            'deadline' => 'required',
        ]);

        if ($validator->fails()) {
            return ApiResponse::error(errors: $validator->errors()->all());
        }

        $project = Project::create([
            'user_id' => Auth::id() ?? 1,
            'title' => $request->title,
            'description' => $request->description,
            'icon' => $request->icon ?? '📝',
            'priority' => $request->priority ?? 'medium',
            'deadline' => $request->deadline,
        ]);

        return ApiResponse::success(['data' => $project]);

    }


    #[OA\Delete(path: '/api/project/delete/{id}', tags: ['Projects'], summary: 'Delete a project by ID')]
    #[OA\Parameter(name: 'id', in: 'path', required: true, description: 'ID of the project to delete')]
    #[OA\Response(response: '200', description: 'Data berhasil dihapus')]
    #[OA\Response(response: '404', description: 'Data tidak ditemukan')]
    #[OA\Response(response: '500', description: 'Terjadi kesalahan pada server')]
    public function destroyApi(string $id)
    {
        $project = Project::find($id);

        if (!$project) {
            return ApiResponse::error(message: 'Project tidak ditemukan', status: 404);
        }

        $project->delete();

        return ApiResponse::success(message: 'Project Berhasil diHapus!');
    }


    #[OA\Put(path: '/api/project/update/{id}', tags: ['Projects'], summary: 'Update a project by ID')]
    #[OA\Parameter(name: 'id', in: 'path', required: true, description: 'ID of the project to update')]
    #[OA\RequestBody(
        required: true,
        content: new OA\JsonContent(
            required: ['title', 'description'],
            properties: [
                new OA\Property(property: 'title', type: 'string', example: 'Membuat Design Website'),
                new OA\Property(property: 'description', type: 'string', example: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.'),
            ]
        )
    )]
    #[OA\Response(response: '200', description: 'Data berhasil diperbarui')]
    #[OA\Response(response: '404', description: 'Data tidak ditemukan')]
    #[OA\Response(response: '500', description: 'Terjadi kesalahan pada server')]
    public function updateApi(Request $request, string $id)
    {
        $project = Project::find($id);

        if (!$project) {
            return ApiResponse::error(message: 'Project tidak ditemukan', status: 404);
        }

        $project->update($request->all());

        return ApiResponse::success($project);
    }


}
