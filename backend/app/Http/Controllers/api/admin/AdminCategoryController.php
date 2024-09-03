<?php

namespace App\Http\Controllers\api\admin;

use App\Http\Controllers\api\files\FileController;
use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class AdminCategoryController extends Controller
{
    protected $filecontroller;
    public function __construct(FileController $filecontroller)
    {
        $this->filecontroller = $filecontroller;
    }
    public function get_categories()
    {
        $categories = Category::all('name', 'id');
        return response()->json(['status' => 'success', 'data' => $categories]);
    }
    public function create_category(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:categories,name',
            'photo' => 'required|string'
        ]);
        $imagePath = $this->filecontroller->storeBase64Attachment($request->photo, 'categories');
        if (is_string($imagePath)) {

            $category = new Category();
            $category->name = $request->name;
            $category->photo = $imagePath;
            $category->save();

            return response()->json(['status' => 'success', 'data' => $category]);
        } else {
            return response()->json(['status' => 'error', 'message' => 'Failed to save the category']);
        }
    }
    public function update_category(Request $request)
    {

        $request->validate([
            'id' => 'required|exists:categories,id',
            'name' => 'required|unique:categories,name,' . $request->id,
        ]);
        $category = Category::findOrFail($request->id);
        $category->name = $request->name;
        $category->save();
        return response()->json(['status' => 'success', 'message' => 'Category Updated Successfully']);
    }
    public function delete_category(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:categories,id',
        ]);
        Category::findOrFail($request->id)->delete();
        return response()->json(['status' => 'success', 'message' => 'Category deleted successfully']);
    }
}
