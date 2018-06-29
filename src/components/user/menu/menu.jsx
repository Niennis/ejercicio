import React, { Component } from 'react';
import { Row, Col, Glyphicon } from 'react-bootstrap';

import './menu.css';

class menu extends Component {
  render() {
    return (
      <div>
        <Row className="menuItem">
          <Col xs={2} md={2}>
            <Glyphicon glyph="list-alt" className="menuIcon" />
          </Col>
          <Col xs={10} md={10}>
            <p className="menuTitle">Historial de Transacciones</p>
          </Col>
        </Row>
        <Row className="menuItem">
          <Col xs={2} md={2}>
            <Glyphicon glyph="stats" className="menuIcon" />
          </Col>
          <Col xs={10} md={10}>
            <p className="menuTitle">Mis recargas</p>
          </Col>
        </Row>
        <Row className="menuItem">
          <Col xs={2} md={2}>
            <Glyphicon glyph="user" className="menuIcon" />
          </Col>
          <Col xs={10} md={10}>
            <p className="menuTitle">Mis datos</p>
          </Col>
        </Row>
        <Row className="menuItem">
          <Col xs={2} md={2}>
            <Glyphicon glyph="shopping-cart" className="menuIcon" />
          </Col>
          <Col xs={10} md={10}>
            <p className="menuTitle">Comercios adheridos</p>
          </Col>
        </Row>
        <Row className="menuItem">
          <Col xs={2} md={2}>
            <Glyphicon glyph="plus-sign" className="menuIcon" />
          </Col>
          <Col xs={10} md={10}>
            <p className="menuTitle">Agregar pagos con financieros</p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default menu;