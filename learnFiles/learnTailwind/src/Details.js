import { Component } from "react";
import { withRouter } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import { Desc } from "./Desc";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  adopt = () => (window.location = "http://bit.ly/pet-adopt");

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const {
      animal,
      breed,
      city,
      state,
      description,
      name,
      images,
      showModal,
    } = this.state;

    return (
      <div className="mx-10 my-10">
        <Carousel images={images} />
        <div>
          <Desc
            name={name}
            animal={animal}
            breed={breed}
            city={city}
            state={state}
            description={description}
          />
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
                className="text-white py-2 px-2 ml-5"
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const DetailsWithRouter = withRouter(Details);

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <DetailsWithRouter {...props} />
    </ErrorBoundary>
  );
}
