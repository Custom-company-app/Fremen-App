<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Avatar;

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
