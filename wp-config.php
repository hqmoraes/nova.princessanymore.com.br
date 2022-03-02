<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'prince44_wp65' );

/** Database username */
define( 'DB_USER', 'prince44_wp65' );

/** Database password */
define( 'DB_PASSWORD', '744e!!ilpS' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'uecgjtqjoqntry8b5oecnzv3kagdb55krhpu1cnwd3bqdjbo2wiizxytozbpsra1' );
define( 'SECURE_AUTH_KEY',  'xqywpntg4w2nekfidyjmiivkrwqkft9wjwnj9ohafp91csbfivu0a3de1dwuauok' );
define( 'LOGGED_IN_KEY',    'rqw18pvin2fswfebxa7urddzhpq4sgqrjlius5wvnagqdtlfxouc54ekbpnzo3a5' );
define( 'NONCE_KEY',        'geqzsxjxugybmxk7jsdzekpnxvnnhm7fwg9k04zhwlbajzxnkvnw6lydpujvv8da' );
define( 'AUTH_SALT',        '4vmtml8fuytizn4urczrlgkox2c5h1xzasp3atckabhsuh3ux6f13skpbndzjsyr' );
define( 'SECURE_AUTH_SALT', 'uuzofct1d7jhvldphm1mof8phma5g2kdn6hwizgiy8ktuv1xpmxkflnintdyx20h' );
define( 'LOGGED_IN_SALT',   'rrsij4dbzaurjut5ihnlvh3s449hhwhxoqmrtmexsnc749hk3h8rbkepmbvkx7qu' );
define( 'NONCE_SALT',       '4t0j3ybwapkc9my4uisivjmewflf4xmpgtpujb1ex46w8f0dtcave9a7qjz0zo5p' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpup_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
