<!--begin::details View-->
<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">


    <!--begin::Card header-->
    <div class="card-header cursor-pointer">


        <!--begin::Card title-->
        <div class="card-title m-0">
            <h3 class="fw-bolder m-0">{{ __('Bedrijfsgegevens') }}</h3>
        </div>
        @if (auth()->user()->company_id === $bedrijf->id)
        <!--end::Card title-->
            @permission('company-update')
            <!--begin::Action-->
            <a href="{{ theme()->getPageUrl('account/settings') }}"
               class="btn btn-primary align-self-center">{{ __('Bewerk Bedrijf') }}</a>
            <!--end::Action-->
            @endpermission
        @endif
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">

        <div class="d-flex flex-wrap mb-3">
            <!--begin: Pic-->
            <div class="me-3 mb-4">
                <div class="symbol symbol-100px symbol-md-120px">
                    <img class="rounded-circle" src="{{ auth()->user()->company->logo_url }}" alt="image"/>
                </div>
            </div>
            <!--end::Pic-->

            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Title-->
                <div class="d-flex justify-content-between align-middle align-items-start flex-wrap mb-2">


                    <!--begin::User-->
                    <div class="my-4">
                        <!--begin::Name-->

                        <p class="text-gray-800 fs-2 fw-bolder me-1">{{ auth()->user()->company->name }}</p>

                        <a href="{{ $bedrijfinfo->website }}" target="_blank"
                           class="text-hover-primary">{{ $bedrijfinfo->website }}</a>
                        <!--end::Name-->
                    </div>
                    <!--end::User-->

                    <!--begin::Actions-->
                    <div class="d-flex my-4">
                        <!--begin::Info-->
                        <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                            <a href="tel:{{ $bedrijfinfo->phone }}" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                {!! theme()->getSvgIcon("icons/duotune/communication/com006.svg", "svg-icon-4 me-1") !!}
                                {{ $bedrijfinfo->phone }}
                            </a>
                            <a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                {!! theme()->getSvgIcon("icons/duotune/general/gen018.svg", "svg-icon-4 me-1") !!}
                                SF, Bay Area
                            </a>
                            <a href="mailto:{{ $bedrijfinfo->email }}" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                {!! theme()->getSvgIcon("icons/duotune/communication/com011.svg", "svg-icon-4 me-1") !!}
                                {{ $bedrijfinfo->email }}
                            </a>
                        </div>
                        <!--end::Info-->


                    </div>
                    <!--end::Actions-->
                </div>
                <!--end::Title-->
            </div>
            <!--end::Info-->
        </div>


    </div>
    <!--end::Card body-->
</div>
<!--end::details View-->
