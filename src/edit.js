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
import {
  useBlockProps,
  RichText,
  AlignmentToolbar,
  BlockControls,
  ColorPalette,
  InspectorControls,
  PanelColorSettings,
  useSetting,
  MediaUpload,
  URLInputButton,
  FontSizePicker,

} from "@wordpress/block-editor";

import {
  PanelBody,
  PanelRow,
  Button,
  RangeControl,
  IconButton,
  SelectControl,
  CheckboxControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit(props) {
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

    setAttributes,
  } = props;

  const onChangeCtaTitle = (newCtaTitle) => {
    setAttributes({ ctaTitle: newCtaTitle });
  };



  ////const blockProps = useBlockProps( { style: blockStyle } );
  const blockProps = useBlockProps({
    className: "wp-block-create-block-divine-cta ",
  });
  const onChangeAlignment = (newAlignment) => {
    setAttributes({
      alignment: newAlignment === undefined ? "none" : newAlignment,
    });
  };

  const onChangeCtaURL = (url) => {
    console.log("in attributes change cta url");
    setAttributes({ ctaUrl: url });
  };
  const onChangeOverLayColor = (hexColor) => {
    setAttributes({ overlay_color: hexColor });
  };

  const onChangeTextColor = (hexColor) => {
    setAttributes({ text_color: hexColor });
  };

  const onChangeBorderColor = (hexColor) => {
    setAttributes({ border_color: hexColor });
  };
  const onChangeArrowColor = (hexColor) => {
    setAttributes({ arrow_color: hexColor });
  };
  const onImageSelect = (imageObject) => {
    console.log("image object url is " + imageObject.url);
    if (imageObject.url === undefined) {
      setAttributes({ background_image: "null" });
    } else {
      setAttributes({ background_image: imageObject.url });
    }
  };
  const onChangeButtonBGColor = (hexColor) => {
    setAttributes({ button_bg_color: hexColor });
  };
  const onChangeBorderStyle = (x) => {
    setAttributes({ border_style: x });
  };
  const setLetterSpacing = (x) => {
    setAttributes({ letter_spacing: x });
  };
  const onTextTransform = (x) => {
    setAttributes({ text_transform: x });
  };
  const onChangeFontSize = (size) => {
    setAttributes({ font_size: size });
  };
  const onClick = () => onImageSelect("");

  const setRange = (size) => {
    setAttributes({ overlay_opacity: size });
  };
  const setBorderRadius = (size) => {
    setAttributes({ border_radius: size });
  };
  const setBorderWidth = (size) => {
    setAttributes({ border_width: size });
  };
  const fallbackFontSize = 16;
  const capitals = [
    {
      value: "none",
      label: "Default",
    },
    {
      value: "lowercase",
      label: "Lower Case",
    },
    {
      value: "uppercase",
      label: "Upper Case",
    },
    {
      value: "capitalize",
      label: "Capitalize",
    },
  ];
  const options = [
    {
      value: "none",
      label: "None",
    },
    {
      value: "hidden",
      label: "Hidden",
    },
    {
      value: "dotted",
      label: "Dotted",
    },
    {
      value: "dashed",
      label: "Dashed",
    },
    {
      value: "solid",
      label: "Solid",
    },
    {
      value: "double",
      label: "Double",
    },
    {
      value: "grooved",
      label: "Grooved",
    },
    {
      value: "ridge",
      label: "Ridge",
    },
    {
      value: "inset",
      label: "Inset",
    },
    {
      value: "outset",
      label: "Outset",
    },
  ];

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
      <InspectorControls key="setting">
        <div>
          <PanelBody title="Font Info" initialOpen={false}>
            <PanelColorSettings
              title={__("Font Color", "divine-cta")}
              initialOpen={true}
              colors={[...useSetting("color.palette.default")]}
              colorSettings={[
                {
                  value: text_color,
                  onChange: onChangeTextColor,
                  label: __("Text Color"),
                },
              ]}
            />

            <PanelRow>
              <legend>{__("Font Size", "divine-cta")}</legend>
              <FontSizePicker
                value={font_size}
                onChange={onChangeFontSize}
                fallbackFontSize={fallbackFontSize}
                min={0}
              />
            </PanelRow>

            <PanelRow>
              <SelectControl
                label="Text Transform"
                value={text_transform}
                options={capitals}
                onChange={onTextTransform}
              />
            </PanelRow>

            <PanelRow>
              <fieldset>
                <RangeControl
                  label="Letter Spacing"
                  value={letter_spacing}
                  onChange={setLetterSpacing}
                  min={0}
                  max={15}
                  step={1}
                />
              </fieldset>
            </PanelRow>
          </PanelBody>
          <div>
            <PanelBody title="Border" initialOpen={false}>
              <PanelRow>
                <SelectControl
                  label="Border Style"
                  value={border_style}
                  options={options}
                  onChange={onChangeBorderStyle}
                />
              </PanelRow>
              <PanelRow>
                <fieldset>
                  <RangeControl
                    label="Border Radius"
                    value={border_radius}
                    onChange={setBorderRadius}
                    min={0}
                    max={100}
                    step={1}
                  />
                </fieldset>
              </PanelRow>
              <PanelRow>
                <fieldset>
                  <RangeControl
                    label="Border Width"
                    value={border_width}
                    onChange={setBorderWidth}
                    min={0}
                    max={100}
                    step={1}
                  />
                </fieldset>
              </PanelRow>
              <PanelRow>
                Border Color
                <fieldset>
                  <ColorPalette // Element Tag for Gutenberg standard colour selector
                    onChange={onChangeBorderColor} // onChange event callback
                    colors={[...useSetting("color.palette.default")]}
                    value={border_color}
                  />
                </fieldset>
              </PanelRow>
            </PanelBody>
          </div>
          <div>
            <PanelBody title="Select a URL" initialOpen={false}>
              <PanelRow>
                <URLInputButton
                  label={__("URL ", "divine-cta")}
                  onChange={onChangeCtaURL}
                  url={ctaUrl}
                />
              </PanelRow>

            </PanelBody>
          </div>
          <div>
            <PanelBody title="Select a Background Image" initialOpen={false}>
              <PanelRow>
                <MediaUpload
                  onSelect={onImageSelect}
                  type="image"
                  value={background_image}
                  render={({ open }) => (
                    <IconButton
                      className="cta-logo__button"
                      onClick={open}
                      icon="format-image"
                      showTooltip="true"
                      label={__("Change image.", "divine-cta")}
                    >
                      Background Image
                    </IconButton>
                  )}
                />
              </PanelRow>
              <PanelRow>
                <Button variant="secondary" onClick={onClick}>
                  Remove background image
                </Button>
              </PanelRow>
            </PanelBody>
          </div>
          <PanelBody title="Overlay Color" initialOpen={false}>
            <fieldset>
              <PanelRow>Overlay Color</PanelRow>
              <ColorPalette // Element Tag for Gutenberg standard colour selector
                onChange={onChangeOverLayColor} // onChange event callback
                colors={[...useSetting("color.palette.default")]}
                value={overlay_color}
              />
            </fieldset>
            <fieldset>
              <RangeControl
                label="Opacity"
                value={overlay_opacity}
                onChange={setRange}
                min={0}
                max={1}
                step={0.1}
              />
            </fieldset>
          </PanelBody>
        </div>
        <PanelBody title="Button Color Settings" initialOpen={false}>
          <PanelColorSettings
            title={__("Foreground & Background Colors", "divine-cta")}
            initialOpen={true}
            colors={[...useSetting("color.palette.default")]}
            colorSettings={[
              {
                value: arrow_color,
                onChange: onChangeArrowColor,
                label: __("Arrow Color"),
              },
              {
                value: button_bg_color,
                onChange: onChangeButtonBGColor,
                label: __("Button Background Color"),
              },
            ]}
          />
        </PanelBody>
      </InspectorControls>
      <BlockControls>
        <AlignmentToolbar value={alignment} onChange={onChangeAlignment} />
      </BlockControls>
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
          //zIndex: 90,
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
      <p className="cta-title">
        <RichText
          style={{
            textAlign: alignment,
            textTransform: text_transform,
            color: text_color,
            fontSize: font_size,
            letterSpacing: letter_spacing,
          }}
          placeholder={__("The title", "divine-cta")}
          value={ctaTitle}
          allowedFormats={["core/bold", "core/italic"]}
          onChange={onChangeCtaTitle}
        />
      </p>
    </div>
  );
}
