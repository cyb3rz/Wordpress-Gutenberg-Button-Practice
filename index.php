<?php
/**
 * Plugin Name: NewButton
 * Author: Rohaan
 * Version: 1.0
 */


function sk_block_registration()
{
    wp_enqueue_style('sk-front-style', plugin_dir_url(__FILE__) . 'front.css');
    
    wp_register_style('sk-edit-style', plugin_dir_url(__FILE__) . 'editor.css');

    wp_register_script('sk-edit-script', plugin_dir_url(__FILE__) . 'block.js', array(
        'wp-blocks',
        'wp-editor',
        'wp-components',
        'wp-i18n',
        'wp-element'
    ));
    
    
    register_block_type('mybutton/sk', array(
        'style' => 'sk-front-style',
        'editor_style' => 'sk-edit-style',
        'editor_script' => 'sk-edit-script'
    ));
}
add_action('init', 'sk_block_registration');