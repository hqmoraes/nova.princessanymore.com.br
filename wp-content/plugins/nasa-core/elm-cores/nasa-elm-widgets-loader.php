<?php

defined('ABSPATH') or die(); // Exit if accessed directly

class Nasa_ELM_Widgets_Loader {
    /**
     * Instance of Nasa_ELM_Widgets_Loader.
     *
     * @since  5.0
     * @var null
     */
    protected static $_instance = null;

    /**
     * Get instance of Widgets_Loader
     *
     * @since  5.0
     * @return Widgets_Loader
     */
    public static function instance() {
        if (!isset(self::$_instance)) {
            self::$_instance = new self();
        }

        return self::$_instance;
    }

    /**
     * Setup actions and filters.
     *
     * @since  5.0
     */
    public function __construct() {
        // Register category.
        add_action('elementor/elements/categories_registered', array($this, 'register_widget_category'));

        // Register widgets.
        add_action('elementor/widgets/widgets_registered', array($this, 'register_widgets'));
    }

    /**
     * Register Category
     *
     * @since 5.0
     * @param object $this_cat class.
     */
    public function register_widget_category($this_cat) {
        $this_cat->add_category(
            'nasa-widgets',
            array(
                'title' => __('Nasa Widgets', 'nasa-core'),
                'icon'  => 'eicon-font',
            )
        );

        return $this_cat;
    }
    
    /**
	 * Register Widgets
	 *
	 * Register new Elementor widgets.
	 *
	 * @since 5.0
	 * @access public
	 */
	public function register_widgets() {
            
	}
}

/**
 * Initiate the class.
 */
function nasa_elm_widgets_loader() {
    return Nasa_ELM_Widgets_Loader::instance();
}

// nasa_elm_widgets_loader();
