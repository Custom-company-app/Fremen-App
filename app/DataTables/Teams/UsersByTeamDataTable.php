<?php

namespace App\DataTables\Teams;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use App\Models\Team;
use App\Models\UserHasTeams;
use App\Models\User;
use App\Models\UserInfo;
use Yajra\DataTables\Services\DataTable;
use Illuminate\Support\Facades\Auth;
use Yajra\DataTables\Html\Column;
use Config;
use App;

class UsersByTeamDataTable extends DataTable
{
    /**
     * Build DataTable class.
     *
     * @param  mixed  $query  Results from query() method.
     *
     * @return \Yajra\DataTables\DataTableAbstract
     */
    public function dataTable($query)
    {
        return datatables()
            ->collection($query)
            ->rawColumns(['action', 'name', 'company','role'])
            ->editColumn('id', function (Collection $model) {
                return Str::limit($model->get('id'), 5, '');
            })
            ->editColumn('role', function (Collection $model) {

                $userid = $model->get('id');

                $user =  User::find($userid);

                $teamuser = auth()->user();

                $role = $user->roles()->wherePivot(Config::get('laratrust.foreign_keys.team'), $teamuser->current_team_id)->first();

                if ($role){
                    $roles = [
                        'administrator' => __('Super admin'),
                        'companyadministrator'     => __('Bedrijfs administrator'),
                        'teamadministrator'  => __('Team administrator'),
                        'teamuser'     => __('Medewerker'),
                        'teamclient'   => __('Klant'),
                        'user'    => __('Gebruiker'),
                    ];
                    $value = $roles[$role->name];
                    return $value;
                }

            })
            ->editColumn('name', function (Collection $model) {

                $firstname = $model->get('first_name');

                $lastname = $model->get('last_name');

                $email = $model->get('email');

                $userid = $model->get('id');

                $user =  User::find($userid);

                $avatar = $user->avatar_url;



                return '<div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
															<a href="../../demo1/dist/apps/user-management/users/view.html">
																<div class="symbol-label">
																	<img src="'.$avatar.'" alt="'.$firstname.' '.$lastname.'" class="w-100">
																</div>
															</a>
														</div><div class="d-flex flex-column">
															<a href="../../demo1/dist/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">'.$firstname.' '.$lastname.'</a>
															<a href="mailto:'.$email.'"><span>'.$email.'</span></a>
														</div>';

                //return $firstname.' '.$lastname;
            })
            ->editColumn('company', function (Collection $model) {
                $userid = $model->get('id');

                $user =  User::find($userid);


                return $user->company->name;
            })
            ->addColumn('action', function (Collection $model) {
                return view('teamwork.partials._action-menu', compact('model'));
            });
    }

    /**
     * Get query source of dataTable.
     *
     * @param  Team  $model
     *
     * @return Collection
     */
    public function query(Team $model)
    {
        $data = Auth::user()->currentTeam->users;




        $data = $data->map(function ($a) {
            return (collect($a))->only(['id','first_name','last_name','email','current_team_id']);
        });


        return $data;
    }

    /**
     * Optional method if you want to use html builder.
     *
     * @return \Yajra\DataTables\Html\Builder
     */
    public function html()
    {
        $locale = App::getLocale();
        $language = Config::get('app.supported_locales.'.$locale.'.urldatatables');

        return $this->builder()
            ->setTableId('table-team-members')
            ->columns($this->getColumns())
            ->minifiedAjax()
            ->stateSave(true)
            ->parameters([
                'scrollX'      => true,
                'drawCallback' => 'function() { KTMenu.createInstances(); }',
                'language' => ['url' => $language]
            ])
            ->orderBy(0)
            ->responsive()
            ->autoWidth(false)
            ->parameters(['scrollX' => true])
            ->addTableClass('align-middle table-row-dashed fs-6 gy-5 fw-bold text-gray-800');
    }

    /**
     * Get columns.
     *
     * @return array
     */
    protected function getColumns()
    {
        return [
            Column::make('id')->width(100)->addClass('ps-0')->exportable(false)
                ->visible(false),
            Column::make('name')->title(__('Naam'))->addClass('d-flex align-items-center'),
            Column::make('role')->title(__('Rol')),
            Column::make('company')->title(__('Bedrijf')),
            Column::computed('action')->title(__('Acties'))
                ->exportable(false)
                ->printable(false)
                ->responsivePriority(-1),
        ];
    }

    /**
     * Get filename for export.
     *
     * @return string
     */
    protected function filename()
    {
        return 'Teamleden_'.date('YmdHis');
    }
}
