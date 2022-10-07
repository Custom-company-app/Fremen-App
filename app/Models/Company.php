<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Avatar;

/**
 * App\Models\Company
 *
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property-read string $logo_url
 * @property-read \App\Models\CompanyInfo|null $info
 * @property-read \Illuminate\Database\Eloquent\Collection|\App\Models\User[] $users
 * @property-read int|null $users_count
 * @method static \Database\Factories\CompanyFactory factory(...$parameters)
 * @method static \Illuminate\Database\Eloquent\Builder|Company newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Company newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Company query()
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Company whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Company extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];


    /**
     * Prepare proper error handling for url attribute
     *
     * @return string
     */
    public function getLogoUrlAttribute()
    {
        if ($this->info->avatar) {
            $url = $this->info->getFirstMediaUrl('logo', 'thumb');
            return $url;
        }

        $logo = Avatar::create($this->name)->setTheme('grayscale-light')->setChars(1)->toBase64();

        $this->info->addMediaFromBase64($logo)->toMediaCollection('logo');

        $url = $this->info->getFirstMediaUrl('logo', 'thumb');

        $this->info->logo = $url;

        $this->info->save();

        return $url;
    }

    /**
     * User relation to info model
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function info()
    {
        return $this->hasOne(CompanyInfo::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function getId()
    {
        return $this->id;
    }
}
