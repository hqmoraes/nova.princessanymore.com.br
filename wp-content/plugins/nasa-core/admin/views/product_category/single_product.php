<?php
$layouts = nasa_single_product_layouts();
$sidebars = nasa_single_product_sidebars();
$imageLayouts = nasa_single_product_images_layout();
$imageStyles = nasa_single_product_images_style();
$thumbStyles = nasa_single_product_thumbs_style();
$tabsStyles = nasa_single_product_tabs_style();
$yesno = array(
    0 => esc_html__('No, Thank!', 'nasa-core'),
    1 => esc_html__('Yes, Please!', 'nasa-core'),
);
$info_cols = array(
    1 => esc_html__('1 Column', 'nasa-core'),
    2 => esc_html__('2 Columns', 'nasa-core'),
);

if (is_object($term) && $term) {
    ?>

    <tr class="form-field nasa-term-root hidden-tag">
        <th scope="row" valign="top">
            <label for="<?php echo $this->_product_sidebar; ?>">
                <?php _e('Single Product Sidebar Position', 'nasa-core'); ?>
            </label>
        </th>
        <td>
            <div class="nasa_single_sidebar">
                <?php
                $selected = get_term_meta($term->term_id, $this->_product_sidebar, true);
                if (!isset($selected)) {
                    $selected = add_term_meta($term->term_id, $this->_product_sidebar, '', true);
                }
                echo '<p><select id="' . $this->_product_sidebar . '" name="' . $this->_product_sidebar . '">';
                foreach ($sidebars as $slug => $name) {
                    echo '<option value="' . $slug . '"' . ($selected == $slug ? ' selected' : '') . '>' . $name . '</option>';
                }
                echo '</select></p>';
                ?>
            </div>
       </td>
    </tr>

    <tr class="form-field nasa-term-root hidden-tag">
        <th scope="row" valign="top">
            <label for="<?php echo $this->_product_layout; ?>">
                <?php _e('Single Product Layout', 'nasa-core'); ?>
            </label>
        </th>
        <td>
            <div class="nasa_single_layout">
                <?php
                $selected = get_term_meta($term->term_id, $this->_product_layout, true);
                if (!isset($selected)) {
                    $selected = add_term_meta($term->term_id, $this->_product_layout, '', true);
                }
                echo '<p><select id="' . $this->_product_layout . '" name="' . $this->_product_layout . '">';
                foreach ($layouts as $slug => $name) {
                    echo '<option value="' . $slug . '"' . ($selected == $slug ? ' selected' : '') . '>' . $name . '</option>';
                }
                echo '</select></p>';
                ?>
            </div>
       </td>
    </tr>

    <!-- Images layout for New -->
    <tr class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-new'; ?> hidden-tag">
        <th scope="row" valign="top">
            <label for="<?php echo $this->_product_image_layout; ?>">
                <?php _e('Image Layout', 'nasa-core'); ?>
            </label>
        </th>
        <td>
            <div class="nasa_single_layout">
                <?php
                $selected = get_term_meta($term->term_id, $this->_product_image_layout, true);
                if (!isset($selected)) {
                    $selected = add_term_meta($term->term_id, $this->_product_image_layout, '', true);
                }

                echo '<p><select id="' . $this->_product_image_layout . '" name="' . $this->_product_image_layout . '">';
                foreach ($imageLayouts as $slug => $name) {
                    echo '<option value="' . $slug . '"' . ($selected == $slug ? ' selected' : '') . '>' . $name . '</option>';
                }
                echo '</select></p>';
                ?>
            </div>
       </td>
    </tr>

    <!-- Images Style for New -->
    <tr class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-new'; ?> hidden-tag">
        <th scope="row" valign="top">
            <label for="<?php echo $this->_product_image_style; ?>">
                <?php _e('Image Style', 'nasa-core'); ?>
            </label>
        </th>
        <td>
            <div class="nasa_single_layout">
                <?php
                $selected = get_term_meta($term->term_id, $this->_product_image_style, true);

                if (!isset($selected)) {
                    $selected = add_term_meta($term->term_id, $this->_product_image_style, '', true);
                }

                echo '<p><select id="' . $this->_product_image_style . '" name="' . $this->_product_image_style . '">';
                foreach ($imageStyles as $slug => $name) {
                    echo '<option value="' . $slug . '"' . ($selected == $slug ? ' selected' : '') . '>' . $name . '</option>';
                }
                echo '</select></p>';
                ?>
            </div>
       </td>
    </tr>

    <!-- Thumbnail Style for New -->
    <tr class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-classic'; ?> hidden-tag">
        <th scope="row" valign="top">
            <label for="<?php echo $this->_product_thumbs_style; ?>">
                <?php _e('Thumbnail Style', 'nasa-core'); ?>
            </label>
        </th>
        <td>
            <div class="nasa_single_layout">
                <?php
                $selected = get_term_meta($term->term_id, $this->_product_thumbs_style, true);

                if (!isset($selected)) {
                    $selected = add_term_meta($term->term_id, $this->_product_thumbs_style, '', true);
                }

                echo '<p><select id="' . $this->_product_thumbs_style . '" name="' . $this->_product_thumbs_style . '">';
                foreach ($thumbStyles as $slug => $name) {
                    echo '<option value="' . $slug . '"' . ($selected == $slug ? ' selected' : '') . '>' . $name . '</option>';
                }
                echo '</select></p>';
                ?>
            </div>
       </td>
    </tr>
    
    <!-- +0.5 item Slide for Full -->
    <tr class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-full'; ?> hidden-tag">
        <th scope="row" valign="top">
            <label for="<?php echo $this->_product_half_full_slide; ?>">
                <?php _e('Overflows: + 0.5 items', 'nasa-core'); ?>
            </label>
        </th>
        <td>
            <div class="nasa_single_layout">
                <?php
                $selected = get_term_meta($term->term_id, $this->_product_half_full_slide, true);

                if (!isset($selected)) {
                    $selected = add_term_meta($term->term_id, $this->_product_half_full_slide, '', true);
                }

                echo '<p><select id="' . $this->_product_half_full_slide . '" name="' . $this->_product_half_full_slide . '">';
                foreach ($yesno as $k => $v) {
                    echo '<option value="' . $k . '"' . ($selected == $k ? ' selected' : '') . '>' . $v . '</option>';
                }
                echo '</select></p>';
                ?>
            </div>
       </td>
    </tr>
    
    <!-- Single Product Info Column - Slide Full Layout -->
    <tr class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-full'; ?> hidden-tag">
        <th scope="row" valign="top">
            <label for="<?php echo $this->_product_full_info_col; ?>">
                <?php _e('Info Columns', 'nasa-core'); ?>
            </label>
        </th>
        <td>
            <div class="nasa_single_layout">
                <?php
                $selected = get_term_meta($term->term_id, $this->_product_full_info_col, true);

                if (!isset($selected)) {
                    $selected = add_term_meta($term->term_id, $this->_product_full_info_col, '', true);
                }

                echo '<p><select id="' . $this->_product_full_info_col . '" name="' . $this->_product_full_info_col . '">';
                foreach ($info_cols as $k => $v) {
                    echo '<option value="' . $k . '"' . ($selected == $k ? ' selected' : '') . '>' . $v . '</option>';
                }
                echo '</select></p>';
                ?>
            </div>
       </td>
    </tr>

    <!-- Tab style -->
    <tr class="form-field nasa-term-root hidden-tag">
        <th scope="row" valign="top">
            <label for="<?php echo $this->_product_tabs_style; ?>">
                <?php _e('Single Product Tabs', 'nasa-core'); ?>
            </label>
        </th>
        <td>
            <div class="nasa_single_tab_style">
                <?php
                $selected = get_term_meta($term->term_id, $this->_product_tabs_style, true);
                echo '<p><select id="' . $this->_product_tabs_style . '" name="' . $this->_product_tabs_style . '">';
                foreach ($tabsStyles as $slug => $name) {
                    echo '<option value="' . $slug . '"' . ($selected == $slug ? ' selected' : '') . '>' . $name . '</option>';
                }
                echo '</select></p>';
                ?>
            </div>
       </td>
    </tr>

<?php } else { ?>
    
    <div class="form-field nasa-term-root hidden-tag">
        <label for="<?php echo $this->_product_layout; ?>">
            <?php _e('Single Product Sidebar Position', 'nasa-core'); ?>
        </label>
        <div class="nasa_single_sidebar">
            <select name="<?php echo $this->_product_sidebar; ?>" id="<?php echo $this->_product_sidebar; ?>" class="postform">
                <?php
                foreach ($sidebars as $slug => $name) {
                    echo '<option value="' . $slug . '">' . $name . '</option>';
                }
                ?>
            </select>
        </div>
    </div>

    <div class="form-field nasa-term-root hidden-tag">
        <label for="<?php echo $this->_product_layout; ?>">
            <?php _e('Single Product Layout', 'nasa-core'); ?>
        </label>
        <div class="nasa_single_layout">
            <select name="<?php echo $this->_product_layout; ?>" id="<?php echo $this->_product_layout; ?>" class="postform">
                <?php
                foreach ($layouts as $slug => $name) {
                    echo '<option value="' . $slug . '">' . $name . '</option>';
                }
                ?>
            </select>
        </div>
    </div>

    <!-- Image Layout for New -->
    <div class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-new'; ?> hidden-tag">
        <label for="<?php echo $this->_product_image_layout; ?>">
            <?php _e('Image Layout', 'nasa-core'); ?>
        </label>
        <div class="nasa_single_layout">
            <?php
            echo '<select id="' . $this->_product_image_layout . '" name="' . $this->_product_image_layout . '">';
            foreach ($imageLayouts as $slug => $name) {
                echo '<option value="' . $slug . '">' . $name . '</option>';
            }
            echo '</select>';
            ?>
        </div>
    </div>

    <!-- Image Style for New -->
    <div class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-new'; ?> hidden-tag">
        <label for="<?php echo $this->_product_image_style; ?>">
            <?php _e('Image Style', 'nasa-core'); ?>
        </label>
        <div class="nasa_single_layout">
            <?php
            echo '<select id="' . $this->_product_image_style . '" name="' . $this->_product_image_style . '">';
            foreach ($imageStyles as $slug => $name) {
                echo '<option value="' . $slug . '">' . $name . '</option>';
            }
            echo '</select>';
            ?>
        </div>
    </div>

    <!-- Thumbnail Style for New -->
    <div class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-classic'; ?> hidden-tag">
        <label for="<?php echo $this->_product_thumbs_style; ?>">
            <?php _e('Thumnail Style', 'nasa-core'); ?>
        </label>
        <div class="nasa_single_layout">
            <?php
            echo '<select id="' . $this->_product_thumbs_style . '" name="' . $this->_product_thumbs_style . '">';
            foreach ($thumbStyles as $slug => $name) {
                echo '<option value="' . $slug . '">' . $name . '</option>';
            }
            echo '</select>';
            ?>
        </div>
    </div>
    
    <!-- +0.5 item Slide for Full -->
    <div class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-full'; ?> hidden-tag">
        <label for="<?php echo $this->_product_half_full_slide; ?>">
            <?php _e('Overflows: + 0.5 items', 'nasa-core'); ?>
        </label>
        <div class="nasa_single_layout">
            <?php
            echo '<select id="' . $this->_product_half_full_slide . '" name="' . $this->_product_half_full_slide . '">';
            foreach ($yesno as $k => $v) {
                echo '<option value="' . $k . '">' . $v . '</option>';
            }
            echo '</select>';
            ?>
        </div>
    </div>
    
    <!-- Single Product Info Columns for Full -->
    <div class="form-field nasa-term-root-child <?php echo $this->_product_layout . ' nasa-term-' . $this->_product_layout . '-full'; ?> hidden-tag">
        <label for="<?php echo $this->_product_full_info_col; ?>">
            <?php _e('Info Columns', 'nasa-core'); ?>
        </label>
        <div class="nasa_single_layout">
            <?php
            echo '<select id="' . $this->_product_full_info_col . '" name="' . $this->_product_full_info_col . '">';
            foreach ($info_cols as $k => $v) {
                echo '<option value="' . $k . '">' . $v . '</option>';
            }
            echo '</select>';
            ?>
        </div>
    </div>

    <!-- Tab style -->
    <div class="form-field nasa-term-root hidden-tag">
        <label for="<?php echo $this->_product_tabs_style; ?>">
            <?php _e('Single Product Tabs', 'nasa-core'); ?>
        </label>
        <div class="nasa_single_layout">
            <select name="<?php echo $this->_product_tabs_style; ?>" id="<?php echo $this->_product_tabs_style; ?>" class="postform">
                <?php
                foreach ($tabsStyles as $slug => $name) {
                    echo '<option value="' . $slug . '">' . $name . '</option>';
                }
                ?>
            </select>
        </div>
    </div>
<?php
}
