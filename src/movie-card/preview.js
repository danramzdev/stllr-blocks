const { Component } = wp.element

class Preview extends Component {
	cardImage = (src, alt) => {
    const { attributes: { borderColor } } = this.props

    if(!src) return null;

    if(alt) {
      return (
        <figure className="image">
          <img
            style={ { border: `5px solid ${borderColor}` }}
            src={ src }
            alt={ alt }
          />
        </figure>
      );
    }

    // No alt set, so let's hide it from screen readers
    return (
      <figure className="image">
        <img
          style={ { border: `5px solid ${borderColor}` } }
          className="card__image"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      </figure>
    );
  };

	render() {
		const { attributes: { title, description, imageUrl, imageAlt } } = this.props

		return (
      <div className="card">
        <div className="card__image-stars">
          { this.cardImage(imageUrl, imageAlt) }
        </div>
        <div className="card__content">
          <div className="title-year">
            <h3 className="title">{ title }</h3>
          </div>
          <div className="description">
            { description }
          </div>
        </div>
      </div>
		)
	}
}

export default Preview
