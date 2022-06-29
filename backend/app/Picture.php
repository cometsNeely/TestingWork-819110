<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Picture extends Model
{
    protected $table = 'picture';
    protected  $primaryKey = "image_id";
    protected $fillable = ['author_fullname', 'rating', 'image_path'];
}
