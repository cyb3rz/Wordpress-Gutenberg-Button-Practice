
( function( blocks, editor, components, i18n, element ) {
     var el = element.createElement; // needed to create HTML elements
    var AlignmentToolbar = editor.AlignmentToolbar;
    var BlockControls = editor.BlockControls;

function AdvColorControl(props) {
  var _wp$components = wp.components,
    ColorIndicator = _wp$components.ColorIndicator,
    BaseControl = _wp$components.BaseControl;

  var _ref3 = wp.blockEditor || wp.editor,
    ColorPalette = _ref3.ColorPalette;

  var BaseLabel = BaseControl.VisualLabel ? BaseControl.VisualLabel : "span";
  var label = props.label,
    value = props.value,
    onChange = props.onChange;
  ("");
  return el(
    BaseControl,
    {
      className:
        "editor-color-palette-control block-editor-color-palette-control"
    },
    el(
      BaseLabel,
      {
        className: "components-base-control__label"
      },
      label,
      value &&
        el(ColorIndicator, {
          colorValue: value
        })
    ),
    el(ColorPalette, {
      className:
        "editor-color-palette-control__color-palette block-editor-color-palette-control__color-palette",
      value: value,
      onChange: onChange
    })
  );
}


     blocks.registerBlockType( 'mybutton/sk', { 
          title: 'My Button', 
          icon: 'megaphone', 
          category: 'common', 
          keywords: [ i18n.__( 'Banner' ), i18n.__( 'CTA' ), i18n.__( 'Shout Out' ) ], 
		  
          attributes: {  
			buttonText: { 
				type: 'string',
			},
			buttonURL: { 
				type: 'url',
			},
			alignment: {
				type: 'string',
				default: 'none',
			},
			textSize: {
				type: "number",
				default: 18
				},
				
    paddingTop: {
      type: "number",
      default: 10
    },
    paddingRight: {
      type: "number",
      default: 30
    },
    paddingBottom: {
      type: "number",
      default: 10
    },
    paddingLeft: {
      type: "number",
      default: 30
    },

    MarginTop: {
      type: "number",
      default: 0,
    },
    MarginRight: {
      type: "number",
      default: 0,
    },
    MarginBottom: {
      type: "number",
      default: 0,
    },
    MarginLeft: {
      type: "number",
      default: 0,
    },
    bgColor: {
      type: "string"
    },
    textColor: {
      type: "string"
    },
    borderRadius: {
      type: "number",
      default: 50
    },

	},

		edit: function( props ) {
			    
            var content = props.attributes.content;
            var alignment = props.attributes.alignment;
 
            function onChangeContent( newContent ) {
                props.setAttributes( { content: newContent } );
            }
 
            function onChangeAlignment( newAlignment ) {
                props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
            }
 
			return [
                el(
                    BlockControls,
                    { key: 'controls' },
                    el(
                        AlignmentToolbar,
                        {
                            value: alignment,
                            onChange: onChangeAlignment,
                        }
                    )
                ),

                el( 'div', { className: props.className },		
					el( 'div', { className: 'cta-bustton-container' },
						el( editor.RichText, {
							tagName: 'p',
							style: { textAlign: alignment },
							className: 'cta-bustton-interior',
							placeholder: 'Button Text',
							value: props.attributes.buttonText,
							onChange: function( newButtonText ) {  props.setAttributes( { buttonText : newButtonText } );  },
							focus: props.focus,
							onFocus: props.setFocus,
						} )
					),
					),

				el( editor.InspectorControls, { key: 'inspector' }, // Display the block options in the inspector panel.
					el( components.PanelBody, {
						title: i18n.__( 'Link' ),
						className: 'block-gb-cta-link',
						initialOpen: true,
						},
						el( components.TextControl, {
							type: 'url',
							label: i18n.__( 'Enter the destination URL for the button' ),
							value: props.attributes.buttonURL,
							onChange: function( newButtonURL ) {
								props.setAttributes( { buttonURL: newButtonURL } );
							},
						} ),
					),
					
					el(components.PanelBody,{
                    title: i18n.__("Text/Color", "advanced-gutenberg")},
					el(components.RangeControl, {
                    label: i18n.__("Text size", "advanced-gutenberg"),
                    value: props.attributes.textSize,
                    onChange: function onChange(size) {props.setAttributes({textSize: size});},
                    min: 10,
                    max: 100,
                    beforeIcon: "editor-textcolor",
                    allowReset: true
                  }),
                    
                  el(AdvColorControl, {
                    label: i18n.__("Text Color", "advanced-gutenberg"),
                    value: props.attributes.textColor,
                    onChange: function onChange(value) {props.setAttributes({textColor: value});}
                  }),

				  el(AdvColorControl, {
                      label: i18n.__("Background Color", "advanced-gutenberg"),
                      value: props.attributes.bgColor,
                      onChange: function onChange(value) {props.setAttributes({bgColor: value});}
                    }),

                ),
				
               el(components.PanelBody,{
                    title: i18n.__("Padding", "advanced-gutenberg"),
                    initialOpen: false },
                  el(components.RangeControl, {
                    label: i18n.__("Padding top", "advanced-gutenberg"),
                    value: props.attributes.paddingTop,
                    onChange: function onChange(value) {props.setAttributes({paddingTop: value});},
                    min: 0,
                    max: 100,
                    allowReset: true
                  }),
                  el(components.RangeControl, {
                    label: i18n.__("Padding right", "advanced-gutenberg"),
                    value: props.attributes.paddingRight,
                    onChange: function onChange(value) {props.setAttributes({paddingRight: value});
                    },
                    min: 0,
                    max: 100,
                    allowReset: true
                  }),
                  el(components.RangeControl, {
                    label: i18n.__("Padding bottom", "advanced-gutenberg"),
                    value: props.attributes.paddingBottom ,
                    onChange: function onChange(value) {props.setAttributes({paddingBottom: value});},
                    min: 0,
                    max: 100,
                    allowReset: true
                  }),
                  el(components.RangeControl, {
                    label: i18n.__("Padding left", "advanced-gutenberg"),
                    value: props.attributes.paddingLeft,
                    onChange: function onChange(value) {props.setAttributes({paddingLeft: value});},
                    min: 0,
                    max: 100,
                    allowReset: true
                  })
                ),				
					
               el(components.PanelBody,{
                    title: i18n.__("Margin", "advanced-gutenberg"),
                    initialOpen: false },
                  el(components.RangeControl, {
                    label: i18n.__("Margin top", "advanced-gutenberg"),
                    value: props.attributes.MarginTop,
                    onChange: function onChange(value) {props.setAttributes({MarginTop: value});},
                    min: 0,
                    max: 100,
                    allowReset: true
                  }),
                  el(components.RangeControl, {
                    label: i18n.__("Margin right", "advanced-gutenberg"),
                    value: props.attributes.MarginRight,
                    onChange: function onChange(value) {props.setAttributes({MarginRight: value});
                    },
                    min: 0,
                    max: 100,
                    allowReset: true
                  }),
                  el(components.RangeControl, {
                    label: i18n.__("Margin bottom", "advanced-gutenberg"),
                    value: props.attributes.MarginBottom ,
                    onChange: function onChange(value) {props.setAttributes({MarginBottom: value});},
                    min: 0,
                    max: 100,
                    allowReset: true
                  }),
                  el(components.RangeControl, {
                    label: i18n.__("Margin left", "advanced-gutenberg"),
                    value: props.attributes.MarginLeft,
                    onChange: function onChange(value) {props.setAttributes({MarginLeft: value});},
                    min: 0,
                    max: 100,
                    allowReset: true
                  })
                ),	
				
               el(components.PanelBody,{
                    title: i18n.__("Border", "advanced-gutenberg"),
                    initialOpen: false },
				   el(components.RangeControl, {
                      label: i18n.__("Border radius", "advanced-gutenberg"),
                      value: props.attributes.borderRadius,
                      onChange: function onChange(value) {props.setAttributes({borderRadius: value});
                      },
                      min: 0,
                      max: 100
                    }),
                ),	

				),				
			];
		},

		save: function( props ) {
			 var attributes = props.attributes;

			 return el( 'div', { style: { textAlign: props.attributes.alignment }},

					el( 'a', {
					   className: 'enroll-btn btn-shadow pulse',
					   style: { "background": props.attributes.bgColor,
								"font-size": props.attributes.textSize+"px",
								"padding-top": props.attributes.paddingTop+"px",
								"padding-right": props.attributes.paddingRight+"px",
								"padding-bottom": props.attributes.paddingBottom+"px",
								"padding-left": props.attributes.paddingLeft+"px",
							// Button Text Color
								"margin-top": props.attributes.MarginTop+"px",
								"margin-right": props.attributes.MarginRight+"px",
								"margin-bottom": props.attributes.MarginBottom+"px",
								"margin-left": props.attributes.MarginLeft+"px",
							// Button Text Color
								"color:": props.attributes.textColor,
							//border-radius: 
								"border-radius": props.attributes.borderRadius+"px",
								
								},
					   href: attributes.buttonURL,
						},
						el( 'span', {}, attributes.buttonText  ),
					),
			   );
		}

	} );
} )(
	window.wp.blocks,
	window.wp.editor,
	window.wp.components,
	window.wp.i18n,
	window.wp.element,
);
