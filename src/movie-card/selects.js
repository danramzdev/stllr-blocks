const { SelectControl } = wp.components

export const SelectFontSize = props => (
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

export const SelectStars = props => (
  <SelectControl
    label="Rate"
    value={ props.stars }
    options={[
      { label: '1 star', value: 1 },
      { label: '1.5 stars', value: 1.5 },
      { label: '2 stars', value: 2 },
      { label: '2.5 stars', value: 2.5 },
      { label: '3 stars', value: 3 },
      { label: '3.5 stars', value: 3.5 },
      { label: '4 stars', value: 4 },
      { label: '4.5 stars', value: 4.5 },
      { label: '5 stars', value: 5 },
    ]}
    onChange={ stars => props.setAttributes( { stars } ) }
  />
)
