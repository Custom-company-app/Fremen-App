<x-base-layout>

    {{ theme()->getView('pages/account/_navbar', array('class' => 'mb-5 mb-xl-10', 'info' => $info)) }}

    {{ theme()->getView('pages/account/settings/_profile-details', array('class' => 'mb-5 mb-xl-10', 'info' => $info)) }}
    @isset($bedrijf->id)
        @if (auth()->user()->company_id === $bedrijf->id)

            @permission('company-update')

            {{ theme()->getView('pages/account/settings/_company-details', array('class' => 'mb-5 mb-xl-10', 'info' => $info, 'bedrijf'=>$bedrijf, 'bedrijfsinfo'=>$bedrijfsinfo)) }}
            @endpermission
        @endif
    @endisset

    {{ theme()->getView('pages/account/settings/_signin-method', array('class' => 'mb-5 mb-xl-10', 'info' => $info)) }}

</x-base-layout>
