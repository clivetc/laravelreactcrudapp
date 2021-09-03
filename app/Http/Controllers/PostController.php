<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Post as PostResource;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return Post::all();
        /*return PostResource::collection(Post::all());
        $posts = Post::all();
        return response()->json($posts);*/
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
 

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $request = new Post([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        $post->save();
        return response ()->json([
            'data' => 'Post created!'
        ]);
    }

    public function edit ($id)
    {
        return new PostResource(Post::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);
        $post = Post::findOrFail($id);
        $post ->title = $request->title;
        $post ->description = $request->description;
        $post->save();

        return response ()->json([
            'data' => 'Post updated!'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post ->delete();

        return response ()->json([
            'data' => 'Post updated!'
        ]);
    }
}
