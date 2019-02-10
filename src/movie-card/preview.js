const { Component } = wp.element

import classnames from 'classnames'

const starsList = [ 'filled', 'half', 'empty' ];

class Preview extends Component {
  starsPrint = ( stars ) => {
    let starsBuilded = []
    let fullStars = Math.floor(stars)
    let halfStars = stars % 1 ? 1 : 0
    let emptyStars = 5 - Math.round(stars)
    let i

    for (i = 1; i <= fullStars; ++i) {
      starsBuilded.push(starsList[0])
    }
    for (i = 1; i <= halfStars; ++i) {
      starsBuilded.push(starsList[1])
    }
    for (i = 1; i <= emptyStars; ++i) {
      starsBuilded.push(starsList[2])
    }

    return starsBuilded
  }

	cardImage = ( src, alt ) => {
    const { attributes: { borderColor } } = this.props

    if( !src ) return null;

    if( alt ) {
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
  }

	render() {
    const { attributes: { title, year, category, director, actors, description, imageUrl, imageAlt, sellUrl, backgroundColor, textColor, fontSize, stars } } = this.props

		return (
      <div className="card" style={{ backgroundColor: backgroundColor }}>
        <div className="card__image-stars">
          { this.cardImage( imageUrl, imageAlt ) }
          <div className="stars">
            { this.starsPrint( stars ).map( value => (
              <i className={classnames('dashicons', `dashicons-star-${value}`)} />
            ) ) }
          </div>
        </div>
        <div className="card__content" style={ { color: textColor } }>
          <div className="title-year">
            <h3 className="title" style={ { fontSize: fontSize } }>{ title }</h3>
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
            href={ sellUrl }
            target="_blank"
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
