const { registerBlockType } = wp.blocks
const { Fragment } = wp.element

import Preview from './components/preview'
import Inspector from './components/inspector'
import Editor from './components/editor'

// Import our CSS files
import './styles/style.scss';
import './styles/editor.scss';

registerBlockType('stllr-blocks/movie-card', {
  title: 'Movie Card',
  icon: 'video-alt2',
  category: 'stllr-blocks',
  attributes: {
    title: {
      source: 'text',
      selector: '.title'
    },
    year: {
      source: 'text',
      selector: '.year'
    },
    category: {
      source: 'text',
      selector: '.category'
    },
    director: {
      source: 'text',
      selector: '.director span'
    },
    actors: {
      source: 'text',
      selector: '.actors span'
    },
    description: {
      type: 'array',
      source: 'children',
      selector: '.description'
    },
    imageAlt: {
    	source: 'attribute',
      attribute: 'alt',
      selector: 'img'
    },
    imageUrl: {
    	source: 'attribute',
      attribute: 'src',
      selector: 'img'
    },
    sellUrl: {
      type: 'string',
      selector: 'a',
      source: 'attribute',
      attribute: 'href'
    },
    borderColor: {
      type: 'string',
      default: 'black'
    },
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    textColor: {
      type: 'string',
      default: 'black'
    },
    fontSize: {
      type: 'string',
      default: '2em'
    },
    stars: {
      type: 'Chars'
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
  save( { attributes } ) {
    return (
    	<Preview { ...{attributes} } />
    );
  }
});
