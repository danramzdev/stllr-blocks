const { Component } = wp.element

class Preview extends Component {
	cardImage = (src, alt) => {
    const { attributes: { borderColor } } = this.props

    if(!src) return null;

    if(alt) {
      return (
        <img
          style={ { border: `5px solid ${borderColor}` }}
          className="card__image"
          src={ src }
          alt={ alt }
        />
      );
    }

    // No alt set, so let's hide it from screen readers
    return (
      <img
        style={ { border: `5px solid ${borderColor}` } }
        className="card__image"
        src={ src }
        alt=""
        aria-hidden="true"
      />
    );
  };

	render() {
		const { attributes: { title, description, imageUrl, imageAlt } } = this.props

		return (
			<div className="card">
        { this.cardImage(imageUrl, imageAlt) }
        <div className="card__content">
          <h3 className="card__title">{ title }</h3>
          <div className="card__body">
            { description }
          </div>
        </div>
      </div>
		)
	}
}

export default Preview
