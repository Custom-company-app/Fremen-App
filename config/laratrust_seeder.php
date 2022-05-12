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
        'superadministrator' => [
            'gebruikers' => 'c,r,u,d',
            'teams' => 'c,r,u,d',
            'instellingen' => 'c,r,u,d',
            'profiel' => 'c,r,u,d'
        ],
        'administrator' => [
            'gebruikers' => 'c,r,u,d',
            'teams' => 'c,r,u,d',
            'profiel' => 'r,u'
        ],
        'teamadmin' => [
            'users' => 'c,r,u',
            'teams' => 'c,r,u,d',
            'profiel' => 'r,u'
        ],
        'teamuser' => [
            'users' => 'r',
            'profiel' => 'r,u'
        ],
        'teamclient' => [
            'users' => 'r',
            'profiel' => 'r,u'
        ],
        'user' => [
            'profiel' => 'r,u',
        ],
    ],

    'permissions_map' => [
        'c' => 'create',
        'r' => 'read',
        'u' => 'update',
        'd' => 'delete'
    ]
];
