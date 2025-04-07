<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ApiResponse extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return parent::toArray($request);
    }

    public static function success($data = null, $message = 'Success', $status = 200)
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data ?? [],
        ], $status);
    }

    public static function error($errors = null, $message = 'Terjadi Kesalahan', $status = 400)
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors ?? [],
        ], $status);
    }
}
