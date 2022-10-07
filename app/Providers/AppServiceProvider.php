<?php

namespace App\Providers;

use App\Core\Adapters\Theme;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use App\Models\User;
use Spatie\Onboard\Facades\Onboard;
use Auth;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider::class);
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        Onboard::addStep(_('Bedrijfgegevens'))
            ->link('/profile')
            ->cta('Aanmaken')
            ->completeIf(function (User $user) {
                return isset(Auth::user()->company_id);
            });

//        Onboard::addStep('Create Your First Post')
//            ->link('/post/create')
//            ->cta('Create Post')
//            ->completeIf(function (User $user) {
//                return $user->posts->count() > 0;
//            });
        $theme = theme();

        // Share theme adapter class
        View::share('theme', $theme);

        $theme->setDemo('demo4');

        $theme->initConfig();

        bootstrap()->run();

        if (isRTL()) {
            // RTL html attributes
            Theme::addHtmlAttribute('html', 'dir', 'rtl');
            Theme::addHtmlAttribute('html', 'direction', 'rtl');
            Theme::addHtmlAttribute('html', 'style', 'direction:rtl;');
            Theme::addHtmlAttribute('body', 'direction', 'rtl');
        }
    }
}
