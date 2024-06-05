<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderProduct extends Model
{
    // Otras partes de tu modelo...

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}