<?php

namespace App\Core\Adapters;

/**
 * Adapter class to make the Metronic core lib compatible with the Laravel functions
 *
 * Class Menu
 *
 * @package App\Core\Adapters
 */
class Menu extends \App\Core\Menu
{
    public function build()
    {
        ob_start();

        parent::build();

        return ob_get_clean();
    }

    /**
     * Filter menu item based on the user permission using Laratrust plugin
     *
     * @param $array
     */
    public static function filterMenuPermissions(&$array)
    {
        if (!is_array($array)) {
            return;
        }

        $user = auth()->user();

        $checkPermission = $checkRole = false;
        if (auth()->check()) {
            // check if the spatie plugin functions exist
            $checkPermission = method_exists($user, 'isAbleTo');
            $checkRole       = method_exists($user, 'hasRole');
        }

        foreach ($array as $key => &$value) {
            if (is_callable($value)) {
                continue;
            }

            if ($checkPermission && isset($value['permission']) && !$user->isAbleTo((array) $value['permission'])) {
                unset($array[$key]);
            }

            if ($checkRole && isset($value['role']) && !$user->hasRole((array) $value['role'])) {
                unset($array[$key]);
            }

            if (is_array($value)) {
                self::filterMenuPermissions($value);
            }
        }
    }
}
