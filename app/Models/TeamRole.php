<?php

namespace App\Models;

use Laratrust\Models\LaratrustTeam;

/**
 * App\Models\TeamRole
 *
 * @property int $id
 * @property string $name
 * @property string|null $display_name
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole query()
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole whereDisplayName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|TeamRole whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class TeamRole extends LaratrustTeam
{
    public $guarded = [];
}
