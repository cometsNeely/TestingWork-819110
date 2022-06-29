<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comment';
    protected  $primaryKey = "comment_id";
    protected $fillable = ['comment', 'image_id'];
}
