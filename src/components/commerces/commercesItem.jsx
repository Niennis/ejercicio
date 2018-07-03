// Dependencies
import React, { Component } from 'react';
import { Col, Modal, Button } from 'react-bootstrap';

// Assets
import Amazon from '../../img/amazon.png';
import Ebay from "../../img/ebay.png";
import Google from "../../img/google_play.png";
import Steam from "../../img/steam.png";
import Uber from "../../img/uber.png";
import Appstore from "../../img/app_store.png";
import Aliexpress from "../../img/aliexpress.png";
import Despegar from "../../img/despegar.png";
import Itunes from "../../img/itunes.png";
import Netflix from "../../img/netflix.png";
import Spotify from "../../img/spotify.png";
import Paypal from "../../img/paypal.png";

class CommercesItem extends Component {
  constructor() {
    super();

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      count: 0,
      show: false,
      name: [],
      image: []
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(e) {
    e.preventDefault();
    this.setState({ show: true });
  }

  renderData() {
    const images = [
      { name: 'Amazon', image: Amazon },
      { name: 'Ebay', image: Ebay },
      { name: 'Google store', image: Google },
      { name: 'Steam', image: Steam },
      { name: 'Uber', image: Uber },
      { name: 'AppStore', image: Appstore },
      { name: 'Aliexpress', image: Aliexpress },
      { name: 'Despegar.com', image: Despegar },
      { name: 'iTunes', image: Itunes },
      { name: 'Netflix', image: Netflix },
      { name: 'Spotify', image: Spotify },
      { name: 'PayPal', image: Paypal }
    ];

    return images.map(com => (      
      <Col xs={6} md={6} key={com.name} className="comCont">
        {/* <small>{com.name}</small> */}
        <img src={com.image} alt={com.name} onClick={this.handleShow} />
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Instrucciones</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Col>
    ));
  }

  componentDidMount() {
    this.setState({
      count: 1
    })
  }

  renderProgress() {
    return (<h3> Cargando imágenes...</h3>)
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        {count !== 0 ? this.renderData() : this.renderProgress()}
      </div>
    );
  }
}

export default CommercesItem;