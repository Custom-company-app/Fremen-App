<x-base-layout>

    <!--begin::Card-->
    <div class="card">
        <!--begin::Card body-->
        <div class="card-body pt-6">
            <div class="card-px text-center pt-15 pb-15">
                <!--begin::Title-->
                <h2 class="fs-2x fw-bolder mb-0">Voorbeeld wizard eenmalig na login</h2>
                <!--end::Title-->
                <!--begin::Action-->
                <a href="#" class="btn btn-primary er fs-6 px-8 py-4" data-bs-toggle="modal" data-bs-backdrop="static" data-bs-keyboard="false" data-bs-target="#kt_modal_create_app">Show form</a>
                <!--end::Action-->
            </div>
        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->

    {{ theme()->getView('wizards/iniFremen/wizard/_iniFremenWizard', array('class' => 'mb-5 mb-xl-10')) }}

</x-base-layout>
