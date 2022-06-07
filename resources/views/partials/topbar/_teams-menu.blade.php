<!--begin::Menu-->
<div class="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px" data-kt-menu="true">
	<!--begin::Heading-->
    <div class="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10" style="background-image:url('{{ asset(theme()->getMediaUrlPath() . 'misc/pattern-1.jpg') }}')">
        <!--begin::Current-->

        <span class="badge bg-primary py-2 px-3 mb-3">{{ __('Huidig team:') }}</span>
        <!--end::Current-->
        <!--begin::Title-->
        @auth
            @isset(Auth::user()->currentTeam->name)
            <h3 class="text-white fw-bold mb-3">

                {{Auth::user()->currentTeam->name}}

            </h3>
            @endisset
            echo "I also have these teams: ";
            {{ Auth::user()->teams }}
        @endauth





    </div>
	<!--end::Heading-->

    <!--begin:Nav-->
    <div class="row g-0">
        <!--begin:Item-->

        <!--end:Item-->


    </div>
    <!--end:Nav-->

    <!--begin::View more-->
    <div class="py-2 text-center border-top">
        <a href="{{ theme()->getPageUrl('pages/profile/activity') }}" class="btn btn-color-gray-600 btn-active-color-primary">
            {{ __('Switch team') }}
            {!! theme()->getSvgIcon("icons/duotune/arrows/arr031.svg", "svg-icon-5") !!}
        </a>
    </div>
    <!--end::View more-->
</div>
<!--end::Menu-->
