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

class CompanyInfo extends Model implements HasMedia
{
    use SpatieLogsActivity, InteractsWithMedia;

    /**
     * Prepare proper error handling for url attribute
     *
     * @return string
     */
    public function getLogoUrlAttribute()
    {
        // if file avatar exist in storage folder
        $logo = public_path(Storage::url($this->logo));
        if (is_file($logo) && file_exists($logo)) {
            // get avatar url from storage
            return Storage::url($this->logo());
        }

        // check if the avatar is an external url, eg. image from google
        if (filter_var($this->logo, FILTER_VALIDATE_URL)) {
            return $this->logo();
        }

        // no avatar, return blank avatar
        return Avatar::create('Fremen')->toBase64();
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
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

}
