<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Company;
use App\Models\CompanyInfo;
use App\Models\UserInfo;
use Faker\Generator;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\Team;
use App\Models\TeamRole;
use App\Models\UserHasTeams;
use Illuminate\Support\Str;


class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Generator $faker)
    {


        $superadmin = User::create([
            'first_name'        => $faker->firstName,
            'last_name'         => $faker->lastName,
            'email'             => 'superadmin@fremen.app',
            'password'          => Hash::make('fremen123'),
            'email_verified_at' => now(),
        ]);

        $this->addDummyInfo($faker, $superadmin);

        $superadmin->attachRole('administrator');

        $company = Company::factory()->create();

        $this->addDummyCompanyInfo($faker, $company);

        $superadmin->company_id = $company->id;
        $superadmin->save();




        $teamadmin = User::create([
            'first_name'        => $faker->firstName,
            'last_name'         => $faker->lastName,
            'email'             => 'teamadmin@fremen.app',
            'password'          => Hash::make('fremen123'),
            'email_verified_at' => now(),
        ]);

        $this->addDummyInfo($faker, $teamadmin);

        $teamname = 'Fremen Team';

        $teamid = Str::random(10);
        $team    = new Team();
        $team->owner_id = $teamadmin->id;
        $team->name = $teamname;

        $team->save();

        $teamadmin->attachTeam(1);

        $teamrole = new TeamRole();
        $teamrole->name = $team->id;
        $teamrole->display_name = $teamname;
        $teamrole->save();

        $teamadmin->attachRole('companyadministrator', $team->id);

        $company = Company::factory()->create();

        $this->addDummyCompanyInfo($faker, $company);

        $teamadmin->company_id = $company->id;
        $teamadmin->save();



        $teamuser = User::create([
            'first_name'        => $faker->firstName,
            'last_name'         => $faker->lastName,
            'email'             => 'teamuser@fremen.app',
            'password'          => Hash::make('fremen123'),
            'email_verified_at' => now(),
        ]);

        $this->addDummyInfo($faker, $teamuser);

        $teamuser->attachTeam(1);

        $teamuser->attachRole('teamuser', 1);

        $company = Company::factory()->create();

        $this->addDummyCompanyInfo($faker, $company);

        $teamuser->company_id = $company->id;
        $teamuser->save();



        $teamcontact = User::create([
            'first_name'        => $faker->firstName,
            'last_name'         => $faker->lastName,
            'email'             => 'teamcontact@fremen.app',
            'password'          => Hash::make('fremen123'),
            'email_verified_at' => now(),
        ]);

        $this->addDummyInfo($faker, $teamcontact);

        $teamcontact->attachTeam(1);

        $teamcontact->attachRole('teamclient', 1);

        $company = Company::factory()->create();

        $this->addDummyCompanyInfo($faker, $company);

        $teamcontact->company_id = $company->id;
        $teamcontact->save();



        User::factory(10)->create()->each(function (User $user) use ($faker) {
            $this->addDummyInfo($faker, $user);

            $user->attachTeam(1);

            $user->attachRole('teamclient', 1);

            $company = Company::factory()->create();

            $this->addDummyCompanyInfo($faker, $company);

            $user->company_id = $company->id;
            $user->save();



        });
        User::factory(10)->create()->each(function (User $user) use ($faker) {
            $this->addDummyInfo($faker, $user);




            $user->attachTeam(1);

            $user->attachRole('teamuser', 1);

            $company = Company::factory()->create();

            $this->addDummyCompanyInfo($faker, $company);

            $user->company_id = $company->id;
            $user->save();


        });
    }

    private function addDummyInfo(Generator $faker, User $user, $teamid = null)
    {
        $dummyUserInfo = [
            'phone'    => $faker->phoneNumber,
            'website'  => $faker->url,
            'language' => 'nl',
            'country'  => 'NL',
        ];

        $info = new UserInfo();
        foreach ($dummyUserInfo as $key => $value) {
            $info->$key = $value;
        }
        $info->user()->associate($user);
        $info->save();




    }

    private function addDummyCompanyInfo(Generator $faker, Company $company)
    {
        $dummyCompanyInfo = [
            'phone'    => $faker->phoneNumber,
            'website'  => $faker->url,
            'email' => $faker->email,
            'country'  => 'NL',
        ];

        $info = new CompanyInfo();
        foreach ($dummyCompanyInfo as $key => $value) {
            $info->$key = $value;
        }
        $info->company()->associate($company);
        $info->save();




    }
}
