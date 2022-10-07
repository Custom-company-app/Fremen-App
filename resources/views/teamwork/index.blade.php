<?php

$color = $color ?? 'primary';

?>

<x-base-layout>



    <!--begin::Card-->
    <div class="card">
        <!--begin::Card body-->

            @include('teamwork.partials._tableHeader')

        <div class="card-body pt-6">
            @include('teamwork.partials._table')
        </div>

    </div>

</x-base-layout>

{{-- Inject Scripts --}}
@section('scripts')
    {{ $dataTable->scripts() }}
@endsection
