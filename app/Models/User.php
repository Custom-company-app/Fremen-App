<?php

namespace App\Models;

use App\Core\Traits\SpatieLogsActivity;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laratrust\Traits\LaratrustUserTrait;
use Mpociot\Teamwork\Traits\UserHasTeams;
use Avatar;


class User extends Authenticatable implements MustVerifyEmail
{
    use LaratrustUserTrait;
    use HasFactory, Notifiable, UserHasTeams;
    use SpatieLogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'api_token',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getRememberToken()
    {
        return $this->remember_token;
    }



    public function setRememberToken($value)
    {
        $this->remember_token = $value;
    }

    /**
     * Get a fullname combination of first_name and last_name
     *
     * @return string
     */
    public function getNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /**
     * Prepare proper error handling for url attribute
     *
     * @return string
     */
    public function getAvatarUrlAttribute()
    {
        if ($this->info->avatar) {
            $url = $this->info->getFirstMediaUrl('avatar', 'thumb');
            return $url;
        }

        $avatar = Avatar::create($this->name)->toBase64();

        $this->info->addMediaFromBase64($avatar)->toMediaCollection('avatar');
        $this->info->avatar = true;

        $this->info->save();
        $url = $this->info->getFirstMediaUrl('avatar', 'thumb');

        return $url;
    }

    /**
     * User relation to info model
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function info()
    {
        return $this->hasOne(UserInfo::class);
    }

    /**
     * User relation to company model
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */

    public function company()
    {
        return $this->belongsTo(Company::class,'company_id');
    }

    public function getId()
    {
        return $this->id;
    }
}
