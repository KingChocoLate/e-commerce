<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function getProducts() {
        $product = Product::all();
        return response()->json($product);
    }

    public function findProduct() {
        $product = Product::updateOrCreate(['name'=>'Harry Potter'], ['category_id'=>2, 'pricing'=>99, 'description'=>'A long wizard adventure at Hogwarts']);
        return response()->json($product);
    }
}
