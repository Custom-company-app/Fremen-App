<?php

return [
    /**
     * Control if the seeder should create a user per role while seeding the data.
     */
    'create_users' => false,

    /**
     * Control if all the laratrust tables should be truncated before running the seeder.
     */
    'truncate_tables' => true,

    'roles_structure' => [
        'administrator' => [
            'users' => 'c,r,u,d',
            'teams' => 'c,r,u,d',
            'profile' => 'c,r,u',
            'company' => 'c,r,u,d',
        ],
        'companyadministrator' => [
            'users' => 'c,r,u',
            'teams' => 'c,r,u',
            'profile' => 'c,r,u',
            'company' => 'c,r,u',
        ],
        'teamadministrator' => [
            'users' => 'c,r,u',
            'teams' => 'c,r,u',
            'profile' => 'c,r,u',
            'company' => 'r',
        ],
        'teamuser' => [
            'users' => 'r,u',
            'profile' => 'r,u',
            'teams' => 'c,r,u',
            'company' => 'r',
        ],
        'teamclient' => [
            'users' => 'r',
            'profile' => 'r,u',
            'teams' => 'r',
            'company' => 'r',
        ],
        'user' => [
            'users' => 'r',
            'profile' => 'r,u',
            'teams' => 'r',
            'company' => 'r',
        ],
    ],

    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete'
    ]
];
