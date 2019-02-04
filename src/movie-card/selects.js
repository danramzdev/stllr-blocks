const { SelectControl } = wp.components

const SelectFontSize = ( props ) => (
  <SelectControl
    label="Font Size"
    value={ props.fontSize }
    options={ [
      { label: 'default', value: '2em' },
      { label: '20px', value: '20px' },
      { label: '22px', value: '22px' },
      { label: '24px', value: '24px' },
      { label: '26px', value: '26px' },
      { label: '28px', value: '28px' },
      { label: '30px', value: '30px' },
      { label: '32px', value: '32px' },
      { label: '34px', value: '34px' },
      { label: '36px', value: '36px' },
    ] }
    onChange={ size => props.setAttributes( { fontSize: size } ) }
  />
)

export default SelectFontSize