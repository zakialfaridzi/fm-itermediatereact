import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="grid gap-1 grid-cols-2">
        <img src={images[active]} alt="animal" className="rounded-full" />
        <div className="grid gap-4 grid-cols-5 py-40 mr-40 col-span-1">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={`${
                index === active ? "active" : ""
              } rounded-full w-48`}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
