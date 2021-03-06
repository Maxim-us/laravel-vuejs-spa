<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    use HasFactory;

    const CREATED_AT = null;

    const UPDATED_AT = null;

    protected $fillable = [
        'name',
        'value'
    ];

}
