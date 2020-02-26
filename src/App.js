import React from "react";
// import logo from "./logo.svg";
import { DashBoard, Modals } from "./container";
// import ReactDom from "react-dom";
import Modal from "react-modal";
import "./App.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      modalIsOpen: false,
      textValue: "OPEN"
    };
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  showModal = e => {
    this.setState({
      show: !this.state.show
    });
    if (this.state.show) {
      this.setState({
        textValue: "OPEN"
      });
    } else {
      this.setState({
        textValue: "CLOSE"
      });
    }
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  /////////////////////////////////////////////////
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  /////////////////////////////////////////////////

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DashBoard />
          <Modals onClose={this.showModal} show={this.state.show}>
            SomeMessage
          </Modals>
          <button
            className="App-button"
            onClick={e => {
              this.showModal();
            }}
          >
            {this.state.textValue}
          </button>
        </header>
        <div>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
