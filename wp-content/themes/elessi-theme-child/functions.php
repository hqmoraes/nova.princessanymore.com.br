<?php
/**
 * Recommended way to include parent theme styles.
 * Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme
 */

add_action('wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles() {
    wp_enqueue_style('elessi-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('elessi-child-style', get_stylesheet_uri());
}
/**
 * Your code goes below
 */

 function add_script_js(){
     wp_enqueue_script('recursos',get_stylesheet_directory_uri() . '/js/recursos.js',array(),'',true);
 }
 add_action('wp_enqueue_scripts','add_script_js');