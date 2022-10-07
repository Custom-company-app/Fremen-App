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
 * App\Models\CompanyInfo
 *
 * @property int $id
 * @property int|null $company_id
 * @property string|null $phone
 * @property string|null $website
 * @property string|null $email
 * @property string|null $country
 * @property string|null $logo
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection|\Spatie\Activitylog\Models\Activity[] $activities
 * @property-read int|null $activities_count
 * @property-read \App\Models\Company|null $company
 * @property-read string $logo_url
 * @property-read \Spatie\MediaLibrary\MediaCollections\Models\Collections\MediaCollection|Media[] $media
 * @property-read int|null $media_count
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo query()
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereCompanyId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|CompanyInfo whereWebsite($value)
 * @mixin \Eloquent
 */
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
