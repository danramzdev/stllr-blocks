const { Component } = wp.element
const { InspectorControls, ColorPalette } = wp.editor
const { PanelBody } = wp.components
import { SelectFontSize, SelectStars } from './selects'

class Inspector extends Component {
  render() {
    const { attributes: { backgroundColor, borderColor, textColor, fontSize, stars }, setAttributes } = this.props

    return (
      <InspectorControls>
				<PanelBody title="Stars" initialOpen={true}>
          <SelectStars  { ...{ stars, setAttributes } } />
        </PanelBody>
				<PanelBody title="Colors" initialOpen={true}>
					<p>Select Background Color</p>
					<ColorPalette value={backgroundColor} onChange={color => {
							if (color) {
								return setAttributes({ backgroundColor: color });
							}
							return setAttributes({ backgroundColor: 'white' });
						}} />
					<hr />
					<p>Select Border Color</p>
					<ColorPalette value={borderColor} onChange={color => {
							if (color) {
								return setAttributes({ borderColor: color });
							}
							return setAttributes({ borderColor: 'transparent' });
						}} />
          <hr />
          <p>Select Text Color</p>
          <ColorPalette value={textColor} onChange={color => {
            if (color) {
              return setAttributes({ textColor: color });
            }
            return setAttributes({ textColor: 'black' });
          }} />
				</PanelBody>
        <PanelBody title="Font Size" initialOpen={false}>
          <SelectFontSize { ...{fontSize, setAttributes} } />
        </PanelBody>
      </InspectorControls>
    )
  }
}

export default Inspector