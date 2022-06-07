<x-base-layout>

{{ theme()->getView('pages/account/_navbar', array('class' => 'mb-5 mb-xl-10')) }}

{{ theme()->getView('pages/account/bedrijf/_details', array('class' => 'mb-5 mb-xl-10', 'infouser' => auth()->user()->info,'bedrijf' => auth()->user()->company,'bedrijfinfo' => auth()->user()->company->info)) }}


</x-base-layout>
