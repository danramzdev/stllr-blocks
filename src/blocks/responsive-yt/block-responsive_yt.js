/**
 * BLOCK: stllrnet-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { URLInputButton } = wp.editor;

registerBlockType( 'stllr-blocks/responsive-yt', {
	title: __( 'Responsive YT' ),
	icon: 'video-alt3',
	category: 'stllr-blocks',
	keywords: [
		__( 'stllr-blocks' ),
		__( 'responsive youtube' ),
	],
	attributes: {
		url: {
			type: 'string'
		}
	},

	edit: function( props ) {
		const { className, attributes, setAttributes } = props;
		return (
			<div className={ className }>
				<URLInputButton
					url={ attributes.url }
					onChange={ ( url ) => setAttributes({ url })}
				/>
			</div>
		);
	},

	save: function( props ) {
		const { attributes } = props;
		return (
			<div className="responsive-container">
				<iframe
					className="responsive-yt"
					src={attributes.url}
					frameborder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		);
	},
} );
