<?php
/**
 * Plugin Name: Stllr Blocks
 * Plugin URI: 
 * Description: Stllr Blocks — is a Gutenberg plugin created via create-guten-block for stllrnet applications.
 * Author: Daniel Ramírez
 * Author URI: https://danramz-portafolio.herokuapp.com
 * Version: 1.0.1
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
