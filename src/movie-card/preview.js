const { Component } = wp.element

class Preview extends Component {
	cardImage = (src, alt) => {
    const { attributes: { borderColor } } = this.props

    if(!src) return null;

    if(alt) {
      return (
        <figure className="image" style={{ border: `6px solid ${borderColor}` }}>
          <img
            src={ src }
            alt={ alt }
          />
        </figure>
      );
    }

    // No alt set, so let's hide it from screen readers
    return (
      <figure className="image" style={{ border: `6px solid ${borderColor}` }}>
        <img
          className="card__image"
          src={ src }
          alt=""
          aria-hidden="true"
        />
      </figure>
    );
  };

	render() {
		const { attributes: { title, year, category, director, actors, description, imageUrl, imageAlt, backgroundColor, textColor } } = this.props

		return (
      <div className="card" style={{ backgroundColor: backgroundColor }}>
        <div className="card__image-stars">
          { this.cardImage(imageUrl, imageAlt) }
          <div class="stars">
            <i class="dashicons dashicons-star-filled"></i>
            <i class="dashicons dashicons-star-filled"></i>
            <i class="dashicons dashicons-star-filled"></i>            
            <i class="dashicons dashicons-star-half"></i>            
            <i class="dashicons dashicons-star-empty"></i>            
          </div>
        </div>
        <div className="card__content" style={{ color: textColor }}>
          <div className="title-year">
            <h3 className="title">{ title }</h3>
            <p className="year">{ year }</p>
          </div>
          <div className="category-director-actors">
            <p className="category">{ category }</p>
            <p className="director"><strong>Director:</strong> <span>{ director }</span></p>
            <p className="actors"><strong>Reparto:</strong> <span>{ actors }</span></p>
          </div>
          <div className="description">
            { description }
          </div>
          <a 
            href="https://www.imdb.com/title/tt5463162/"
            style={{
              backgroundColor: textColor,
              color: backgroundColor
            }}
          >Comprar</a>
        </div>
      </div>
		)
	}
}

export default Preview
