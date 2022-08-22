/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */

import { useBlockProps, RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

export default function save(props) {
  const blockProps = useBlockProps.save({
    className: "wp-block-create-block-divine-cta",
  });

  const {
    attributes: {
      ctaTitle,
      alignment,
      text_color,
      font_size,
      overlay_color,
      overlay_opacity,
      arrow_color,
      button_bg_color,
      ctaUrl,
      background_image,
      border_style,
      border_color,
      border_width,
      border_radius,
      text_transform,
      letter_spacing,

    },
  } = props;

  return (
    <div
      {...blockProps}
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        backgroundPosition: "center center",
        borderColor: border_color,
        borderStyle: border_style,
        borderRadius: border_radius,
        borderWidth: border_width,
      }}
    >
      <div
        className="overlay_class"
        style={{
          backgroundColor: overlay_color,

          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          opacity: overlay_opacity,
          // zIndex: 90,
        }}
      ></div>
      <div className="divine-cta">
        <a
          href={ctaUrl}
          style={{
            color: arrow_color,
            borderColor: arrow_color,
            backgroundColor: button_bg_color,
          }}
        ></a>
      </div>
      <p
        className="cta-title"
        style={{
          textAlign: alignment,
          textTransform: text_transform,
          letterSpacing: letter_spacing,
          color: text_color,
          fontSize: font_size,
        }}
      >
        <RichText.Content value={ctaTitle} />
      </p>
    </div>
  );
}
