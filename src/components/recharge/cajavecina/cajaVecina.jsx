import React, { Component } from 'react';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './cajavecina.css'

class CajaVecina extends Component {
  render() {
    return (
      <div className="recharge">
        <Row className="headerRe">
          <Col xs={1} md={1}>
            <Link to='/recharge'>
              <Glyphicon glyph="chevron-left" className="back"/>
            </Link>
          </Col>
          <Col xs={10} md={10}>
            <h3>Pago con caja vecina</h3>
            <h5>Tu saldo Finciero</h5>
            <h3>US$ 19.05</h3>
          </Col>
        </Row>
        <div className="cajaItem">
          <Row>
            <Col xs={1} md={1}>        
              <Glyphicon glyph="record" className="record"/> 
            </Col>          
            <Col xs={10} md={10}>
              <p className="instructions">DIRÍGETE A TU CASA VECINA MÁS CERCANA.</p>
            </Col>
          </Row>
        </div>
        <div className="cajaItem">
          <Row>
            <Col xs={1} md={1}>        
              <Glyphicon glyph="record" className="record"/> 
            </Col>          
            <Col xs={10} md={10}>
              <p className="instructions">INFORMA QUE QUIERES PAGAR FINCIERO.</p>
            </Col>
          </Row>
        </div>
        <div className="cajaItem">
          <Row>
            <Col xs={1} md={1}>        
              <Glyphicon glyph="record" className="record"/> 
            </Col>          
            <Col xs={10} md={10}>
              <p className="instructions">DA NUESTRO CÓDIGO 12345.</p>
            </Col>
          </Row>
        </div>
        <div className="cajaItem">
          <Row>
            <Col xs={1} md={1}>        
              <Glyphicon glyph="record" className="record"/> 
            </Col>          
            <Col xs={10} md={10}>
              <p className="instructions">REALIZA EL PAGO.</p>
            </Col>
          </Row>
        </div>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h5>Recuerda enviar tu comprobante a</h5>
            <h5 className="mailFinciero">pagos@finciero.com</h5>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CajaVecina;