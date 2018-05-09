<?php

    function web_files(){
        wp_enqueue_script('main-university-js', get_theme_file_uri('/js/scripts-bundled.js'), NULL, true);
        wp_enqueue_script('main-uni-js', get_theme_file_uri('/js/main.js'), NULL, true);
        wp_enqueue_style('bootstrap','https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css',null,microtime());
        wp_enqueue_style('mystyle',get_stylesheet_uri(),null,microtime());
    }
    function my_function(){
        add_theme_support('title-tag');
    }
    add_action('after_setup_theme','my_function');
    add_action('wp_enqueue_scripts','web_files');
?>
