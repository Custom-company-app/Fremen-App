<!--begin::Table-->
{{ $dataTable->table() }}
<!--end::Table-->

{{-- Inject Scripts --}}
@section('scripts')
    {{ $dataTable->scripts() }}
    <script src="{{ asset(theme()->getDemo() . '/' .'js/custom/apps/user-management/users/list/table.js') }}"></script>

@endsection
