<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Flasher\Toastr\Prime\ToastrFactory;
use Illuminate\Support\Facades\Auth;


class PagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function index()
    {
        // Get view file location from menu config
        $view = theme()->getOption('page', 'view');

        // Check if the page view file exist
        if (view()->exists('pages.'.$view)) {
//            if (auth()->user()->onboarding()->inProgress()) {
//                return redirect()->to(
//                    auth()->user()->onboarding()->nextUnfinishedStep()->link
//                );
//            }
            return view('pages.'.$view);
        }

        // Get the default inner page
        return redirect('/');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function landing()
    {
        // Get view file location from menu config

            return view('pages.landing.fremen');


    }

    /**
     * Test wizard
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function wizardTest(ToastrFactory $flasher)
    {
        $flasher->addFlash('error', 'Data has been saved successfully!',__('Gelukt'),array('closeButton'=>true));

        return view('wizards.iniFremen.index');

    }

    /**
     * Temporary function to replace icon duotone
     */
    public function replaceIcons()
    {
        $fileContent = file_get_contents(public_path('icon_replacement.txt'));
        $lines       = explode("\n", $fileContent);

        $patterns     = [];
        $replacements = [];
        foreach ($lines as $line) {
            $el = explode(' - ', $line);
            if (empty($line)) {
                continue;
            }
            $patterns[]     = trim($el[0]);
            $replacements[] = trim($el[1]);
        }

        $files    = File::allFiles(resource_path());
        $filtered = array_filter($files, function ($str) {
            return strpos($str, ".php") !== false;
        });

        foreach ($filtered as $file) {
            $bladeFileContent = file_get_contents($file->getPathname());

            $bladeFileContent = str_replace($patterns, $replacements, $bladeFileContent);

            file_put_contents($file->getPathname(), $bladeFileContent);
        }
    }
}
