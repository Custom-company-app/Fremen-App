<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Http\Requests\Account\SettingsEmailRequest;
use App\Http\Requests\Account\SettingsInfoRequest;
use App\Http\Requests\Account\SettingsInfoCompanyRequest;
use App\Http\Requests\Account\SettingsPasswordRequest;
use App\Models\UserInfo;
use App\Models\User;
use App\Models\Company;
use App\Models\CompanyInfo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

use Config;

class SettingsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        $info = auth()->user()->info;

        $bedrijf = auth()->user()->company;

        $bedrijfsinfo = auth()->user()->company->info;

        // get the default inner page
        return view('pages.account.settings.settings', compact('info','bedrijf','bedrijfsinfo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $user
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(SettingsInfoRequest $request)
    {
        // save user name
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
        ]);

        auth()->user()->update($validated);

        // save on user info
        $info = UserInfo::where('user_id', auth()->user()->id)->first();

        if ($info === null) {
            // create new model
            $info = new UserInfo();
        }

        // attach this info to the current user
        $info->user()->associate(auth()->user());

        foreach ($request->only(array_keys($request->rules())) as $key => $value) {
            if (is_array($value)) {
                $value = serialize($value);
            }
            $info->$key = $value;
        }

        if($request->hasFile('avatar') && $request->file('avatar')->isValid()){
            $info->media()->delete();
            $info->addMediaFromRequest('avatar')->toMediaCollection('avatar');
            $info->avatar = true;
        }

        if ($request->boolean('avatar_remove')) {
            $info->media()->delete();
            $info->avatar = null;
        }

        $info->save();

        return redirect()->intended('account/settings');
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $user
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updateCompany(SettingsInfoCompanyRequest $request)
    {
        // save user name
        $validated = $request->validate([
            'name' => 'required|string|max:255',
        ]);

        auth()->user()->company->update($validated);

        // save on user info
        $info = CompanyInfo::where('company_id', auth()->user()->company->id)->first();

        if ($info === null) {
            // create new model
            $info = new CompanyInfo();
        }

        // attach this info to the current user
        $info->company()->associate(auth()->user()->company);

        foreach ($request->only(array_keys($request->rules())) as $key => $value) {
            if (is_array($value)) {
                $value = serialize($value);
            }
            $info->$key = $value;
        }

        if($request->hasFile('logo') && $request->file('logo')->isValid()){
            $info->media()->delete();
            $info->addMediaFromRequest('logo')->toMediaCollection('logo');
            $url = $info->getFirstMediaUrl('logo', 'thumb');
            $info->logo = $url;
        }

        if ($request->boolean('logo_remove')) {
            $info->media()->delete();
            $info->logo = null;
        }

        $info->save();

        return redirect()->intended('account/settings');
    }
    /**
     * Function for upload avatar image
     *
     * @param  string  $folder
     * @param  string  $key
     * @param  string  $validation
     *
     * @return false|string|null
     */
    public function upload($folder = 'images', $key = 'avatar', $validation = 'image|mimes:jpeg,png,jpg,gif,svg|max:2048|sometimes')
    {
        request()->validate([$key => $validation]);

        $file = null;
        if (request()->hasFile($key)) {
            $file = Storage::disk('public')->putFile($folder, request()->file($key), 'public');
        }

        return $file;
    }

    /**
     * Function to accept request for change email
     *
     * @param  SettingsEmailRequest  $request
     */
    public function changeEmail(SettingsEmailRequest $request)
    {
        // prevent change email for demo account
        if ($request->input('current_email') === 'demo@demo.com') {
            return redirect()->intended('account/settings');
        }

        auth()->user()->update(['email' => $request->input('email')]);

        if ($request->expectsJson()) {
            return response()->json($request->all());
        }

        return redirect()->intended('account/settings');
    }

    /**
     * Function to accept request for change password
     *
     * @param  SettingsPasswordRequest  $request
     */
    public function changePassword(SettingsPasswordRequest $request)
    {
        // prevent change password for demo account
        if ($request->input('current_email') === 'demo@demo.com') {
            return redirect()->intended('account/settings');
        }

        auth()->user()->update(['password' => Hash::make($request->input('password'))]);

        if ($request->expectsJson()) {
            return response()->json($request->all());
        }

        return redirect()->intended('account/settings');
    }
}
