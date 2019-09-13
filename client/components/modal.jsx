import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: false
    }
  }

  // showModal() {
  //   this.setState({
  //     show: true
  //   });
  // }

  closeModal() {
    this.setState({
      show: false
    });
  }

  render() {
    if(!this.props.show){
        return null;
    }
    return (
      <div>
        <div>{this.props.text}</div>
        <button
          onClick={() => {
            this.closeModal();
          }}>close</button>
      </div>
    );
  }
}

export default Modal;
