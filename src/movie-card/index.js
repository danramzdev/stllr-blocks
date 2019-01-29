const { registerBlockType } = wp.blocks
const { Fragment } = wp.element

import Preview from './preview'
import Inspector from './inspector'
import Editor from './editor'

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
    year: {
      source: 'text',
      selector: '.card__year'
    },
    category: {
      source: 'text',
      selector: '.card__category'
    },
    director: {
      source: 'text',
      selector: '.card__director'
    },
    actors: {
      source: 'text',
      selector: '.card__actors'
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
    return (
      <Fragment>
        <Inspector  { ...{attributes, setAttributes} } />
        <Editor { ...{attributes, setAttributes, className} } />
      </Fragment>
    );

  },

  save({ attributes }) {
    return (
    	<Preview { ...{attributes} } />
    );
  }
});
