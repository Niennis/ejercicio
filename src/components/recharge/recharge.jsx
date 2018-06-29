// Dependencies
import React, { Component } from 'react';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Assets
import './recharge.css';

class Recharge extends Component {
  render() {
    return (
      <div className="recharge">
        <Row className="headerRe">
          <Col xs={1} md={1}>
            <Button bsStyle="link" bsSize="large"><Glyphicon glyph="arrow-left" className="backToUser"/></Button>
          </Col>
          <Col xs={10} md={10}>
            <h3>Crear recarga nueva</h3>
            <h5>Tu saldo Finciero</h5>
            <h3>US$ 19.05</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={10} xsOffset={1}>
            <h4>Conoce todas las formas de recargar tu tarjeta</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={10} className="rechargeItem">
            <p className="rechargeOp">Transferencia en línea</p>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={10} className="rechargeItem">
            <p className="rechargeOp">BancoEstado en línea</p>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={10} className="rechargeItem">
            <p className="rechargeOp">Pago en efectivo en ServiPag</p>
          </Col>
        </Row>
        <Row>
          <Col xs={10} md={10} className="rechargeItem">
            <p className="rechargeOp">Pago en efectivo en ServiEstado</p>
          </Col>
        </Row>
        <Link to='/caja'>        
          <Row>
            <Col xs={10} md={10} className="rechargeItem">
              <p className="rechargeOp">Pago en efectivo en Caja Vecina</p>
            </Col>
          </Row>
        </Link>
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

export default Recharge;