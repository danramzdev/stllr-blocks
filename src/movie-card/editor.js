const { Component } = wp.editor

class Editor extends Component {
  getImageButton = (openEvent) => {
    const { attributes: { imageUrl } } = this.props 

    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          onClick={openEvent}
          className="image"
        />
      );
    }
    else {
      return (
        <div className="button-container">
          <Button
            onClick={openEvent}
            className="button button-large"
          >
            Pick an image
            </Button>
        </div>
      );
    }
  }

  render() {
    const { 
      attributes,
      setAttributes,
      className
    } = this.props

    const { title, year, category, director, actors, description } = attributes

    return (
      <div className={className} >
        <MediaUpload
          onSelect={media => { setAttributes({ imageAlt: media.alt, imageUrl: media.url }) }}
          type="image"
          value={attributes.imageID}
          render={({ open }) => this.getImageButton(open)}
        />
        <PlainText
          onChange={content => setAttributes({ title: content })}
          value={title}
          placeholder="Movie title"
          className="heading"
        />
        <PlainText
          onChange={content => setAttributes({ year: content })}
          value={year}
          placeholder="Movie Year"
          className="heading"
        />
        <PlainText
          onChange={content => setAttributes({ category: content })}
          value={category}
          placeholder="Movie Category"
          className="heading"
        />
        <PlainText
          onChange={content => setAttributes({ director: content })}
          value={director}
          placeholder="Movie Category"
          className="heading"
        />
        <PlainText
          onChange={content => setAttributes({ actors: content })}
          value={actors}
          placeholder="Movie Actors"
          className="heading"
        />
        <RichText
          onChange={content => setAttributes({ description: content })}
          value={description}
          multiline="p"
          placeholder="Movie Description"
          formattingControls={['bold', 'italic', 'underline']}
          isSelected={attributes.isSelected}
        />
      </div>
    )
  }
}

export default Editor