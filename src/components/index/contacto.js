import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col} from "react-bootstrap";
import app from "../../app.json";
import './contacto.css';



import Loading from "../loading/loading";
import Card from 'react-bootstrap/Card';
const {APIHOST} = app;


export default class contacto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  crearContacto(){
    this.setState({ loading: true });
    axios.post(`${APIHOST}/usuarios/contacto`,{
      nombres: this.state.nombres,
      telefono: this.state.telefono,
      email: this.state.email,
      mensaje: this.state.mensaje,
    })
  }
  
  
  render() {
    return (
      <Container id="contacto-container">
        
        <Loading show={this.state.loading} />
        <Row  xs={1} md={4} lg={4}>
          <Col
        xs={12} md={8}>
           <img src={"../Imagenes/Logo4.jpeg"  } style={{width:260}}/>
            <Row>
              <h2>contactanos</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicNombres">
                  <Form.Label>Nombres</Form.Label>
                  <Form.Control onChange={(e) => this.setState({nombres: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTelefono">
                  <Form.Label>Telefono de contacto</Form.Label>
                  <Form.Control onChange={(e) => this.setState({telefono: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo electronico</Form.Label>
                  <Form.Control onChange={(e) => this.setState({email: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMensaje">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={3} onChange={(e) => this.setState({mensaje: e.target.value})} />
                </Form.Group>
                <Button
                 style={{width:300}}
                  variant="primary"
                  onClick= {()=>{
                    this.crearContacto(); 
                  }}
                >
                  Enviar
                </Button>
              </Form>
            </Row>
          </Col>
       <Col  md={600}>
        <h2>¿Donde nos encontramos?</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15907.78282528215!2d-74.0723924!3d4.6037452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x817ea91289edd909!2sDASANSOR%20SAS!5e0!3m2!1ses-419!2sco!4v1662087013527!5m2!1ses-419!2sco" width="798" height="400"></iframe>
        <h2>Nuestras redes sociales</h2>
        <br></br>
             <a href="https://www.facebook.com/" target="_blank"><img src={"../Imagenes/redes/face.png"} width="80px;" alt=""/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={"../Imagenes/redes/insta.png"} width="60px;" alt=""/></a>
                <a href="https://www.linkedin.com/" target="_blank"><img src={"../Imagenes/redes/link.png"} width="60px;" alt=""/></a><p> <h4>oficinas principales:Cra 7 #17 01 Bogota </h4>
                  </p>
                <br></br>
                
                
                  
        </Col>
        </Row>
        <br></br>
        <Card bg='secondary'>
    <Card.Body>
          <Card.Text  style={{ color: 'white' }}>
          Grupo 1 Ruta 2 Ciclo 3 UTP, Derechos reservados © 2022
          </Card.Text>
        </Card.Body>
      </Card>
        </Container>
    );
  }
}