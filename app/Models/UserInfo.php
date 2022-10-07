<?php

namespace App\Models;

use App\Core\Traits\SpatieLogsActivity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Avatar;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Image\Manipulations;

/**
 * App\Models\UserInfo
 *
 * @property int $id
 * @property int $user_id
 * @property string|null $avatar
 * @property string|null $company
 * @property string|null $phone
 * @property string|null $website
 * @property string|null $country
 * @property string|null $language
 * @property string|null $timezone
 * @property string|null $currency
 * @property mixed|null $communication
 * @property int|null $marketing
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Activitylog\Models\Activity[] $activities
 * @property-read int|null $activities_count
 * @property-read string $avatar_url
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection|Media[] $media
 * @property-read int|null $media_count
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo query()
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereAvatar($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereCommunication($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereCompany($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereCurrency($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereLanguage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereMarketing($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereTimezone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|UserInfo whereWebsite($value)
 * @mixin \Eloquent
 */
class UserInfo extends Model implements HasMedia
{
    use SpatieLogsActivity, InteractsWithMedia;

    /**
     * Prepare proper error handling for url attribute
     *
     * @return string
     */
    public function getAvatarUrlAttribute()
    {
        // if file avatar exist in storage folder
        $avatar = public_path(Storage::url($this->avatar));
        if (is_file($avatar) && file_exists($avatar)) {
            // get avatar url from storage
            return Storage::url($this->avatar());
        }

        // check if the avatar is an external url, eg. image from google
        if (filter_var($this->avatar, FILTER_VALIDATE_URL)) {
            return $this->avatar();
        }

        // no avatar, return blank avatar
        return Avatar::create('Joko Widodo')->toBase64();
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this
            ->addMediaConversion('thumb')
            ->fit(Manipulations::FIT_CROP, 250, 250)
            ->nonQueued();
    }

    /**
     * User info relation to user model
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Unserialize values by default
     *
     * @param $value
     *
     * @return mixed|null
     */
    public function getCommunicationAttribute($value)
    {
        // test to un-serialize value and return as array
        $data = @unserialize($value);
        if ($data !== false) {
            return $data;
        } else {
            return null;
        }
    }
}
