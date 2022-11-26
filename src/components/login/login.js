import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col} from "react-bootstrap";
import app from "../../app.json";
import './login.css'
import { isNull} from "util";
import Cookies from "universal-cookie";
import { calcularExpirarSesion } from "../helper/helper";
import Loading from "../loading/loading";
import Card from 'react-bootstrap/Card';
const {APIHOST} = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario:'',
      pass:'',
    };
  }
  iniciarSesion(){
    this.setState({ loading: true });
    axios.post(`${APIHOST}/usuarios/login`,{
      usuario: this.state.usuario,
      pass: this.state.pass,
    })
  
  .then((response) => {
    if (isNull (response.data.token)){
      alert ("Usuario y/o contraseña inválidos");
    }
    else {
      cookies.set('_s', response.data.token,
      {
        path: '/', 
        expires: calcularExpirarSesion(), 
      });
      this.props.history.push(window.open('/ejecuciones')
      );
    }
    this.setState({ loading: false });


  })
  .catch((err) => {
    console.log(err);
    this.setState({ loading: false });
  });
  //alert ('Botón de iniciar sesión');
}
  
  render() {
    return (
      <Container id="login-container"><br></br>
         <img src={"../Imagenes/Logo4.jpeg"  } style={{width:250,  borderRadius:20}}/>
        <Loading show={this.state.loading} />
        <Row>
          <Col
          sm="12"
          xs="12"
          md={{span: 4, offset:4}}
          lg={{span: 4, offset:4}}
          xl={{span: 4, offset:4}}>
            <Row>
              <h2>Iniciar Sesión</h2>
            </Row>
            <Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control onChange={(e) => this.setState({usuario: e.target.value})} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control type= "password" onChange={(e) => this.setState({pass: e.target.value})} />
                </Form.Group>
                <Button
                 style={{ color: 'white' }}
                  variant="primary"
                  onClick= {()=>{
                    this.iniciarSesion(); 
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Form>
            </Row>
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
