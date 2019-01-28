const { 
  RichText, 
  MediaUpload, 
  PlainText, 
  InspectorControls, 
  ColorPalette
} = wp.editor;
const { registerBlockType } = wp.blocks;
const { Button, Panel, PanelBody } = wp.components;
const { Fragment } = wp.element;

import Preview from './preview'

// Import our CSS files
import './style.scss';
import './editor.scss';

registerBlockType('stllr-blocks/movie-card', {
  title: 'Movie Card',
  icon: 'video-alt2',
  category: 'stllr-blocks',
  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    description: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    imageAlt: {
    	source: 'attribute',
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
    	source: 'attribute',
      attribute: 'src',
      selector: '.card__image'
    },
    borderColor: {
      type: 'string',
      default: 'grey'
    },
    backgroundColor: {
      type: 'string',
      default: 'transparent'
    }
  },
  edit( { attributes, className, setAttributes, focus } ) {
    const { title, description, imageUrl, borderColor, backgroundColor} = attributes

    const getImageButton = (openEvent) => {
      if(imageUrl) {
        return (
          <img
            src={ imageUrl }
            onClick={ openEvent }
            className="image"
          />
        );
      }
      else {
        return (
          <div className="button-container">
            <Button
              onClick={ openEvent }
              className="button button-large"
            >
              Pick an image
            </Button>
          </div>
        );
      }
    };

    return ([
      <InspectorControls>
        <PanelBody
          title="Colors"
          initialOpen={true}
        > 
          <div style={{ marginBottom: '20px' }}>
            <p>Select Background Color</p>
            <ColorPalette
              value={backgroundColor}
              onChange={color => {
                if (color) {
                  return setAttributes({ backgroundColor: color })
                }
                return setAttributes({ backgroundColor: 'transparent' })
              }}
            />
          </div>
          <hr/>
          <p>Select Border Color</p>
          <ColorPalette
            value={borderColor}
            onChange={ color => {
              if (color) {
                return setAttributes({ borderColor: color })
              }
              return setAttributes({ borderColor: 'transparent' })
            } }
          />
        </PanelBody>
      </InspectorControls>,
      <div className={className} >
        <MediaUpload
          onSelect={ media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }) } }
          type="image"
          value={ attributes.imageID }
          render={ ({ open }) => getImageButton(open) }
        />
        <div>
	        <label htmlFor="title">Título de la película</label>
	        <PlainText
	          onChange={ content => setAttributes({ title: content }) }
	          value={ title }
	          id="title"
	          className="heading"
	        />
        </div>
        <RichText
          onChange={ content => setAttributes({ description: content }) }
          value={ description }
          multiline="p"
          placeholder="Movie Description"
          formattingControls={ ['bold', 'italic', 'underline'] }
          isSelected={ attributes.isSelected }
        />
      </div>
    ]);

  },

  save({ attributes }) {
    return (
    	<Preview { ...{attributes} } />
    );
  }
});
