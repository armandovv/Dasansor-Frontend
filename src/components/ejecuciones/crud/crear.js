import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../ejecuciones.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";


export default class EjecucionesCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret : false,
        message: {
          text: "",
          show: false
        },

        loading: false,
        ejecucion:{
          num_orden:'',
          valor_orden:'',
          fecha_asignacion:'',
          actividad:'',
          nombre_sitio:'',
          fecha_instalacion:'',
          fecha_integracion:'',
          fecha_documentacion:'',
        },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }

  setValue(inicio, value){
    this.setState({
        ejecucion: {
            ...this.state.ejecucion,
            [inicio]: value, 
        },
    });
  }

  guardarEjecuciones(){
    this.setState({ loading: true });
    request
    .post("/ejecuciones", this.state.ejecucion)
    .then((response) => {
      if (response.data.exito){
        this.setState({
          rediret: response.data.exito,
          message:{
            text: response.data.msg,
            show: true,
          },
        });
      }
        this.setState({ loading: false});
    })
    .catch((err) => {
    console.error(err);
    this.setState({ loading: true });
    });
  }
  onExitedMessage(){
    if (this.state.rediret) this.props.changeTab('buscar');
  }
  render() {
    return (
      <Container id="ejecuciones-crear-container">
        <MessagePrompt
        text = {this.state.message.text}
        show = {this.state.message.show}
        duration = {2500} 
        onExited= {this.onExitedMessage}
        />
        <Loading show= {this.state.loading}/>
        <Row>
          <h1>Crear Ejecuciones</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Num_Orden</Form.Label>
              <Form.Control 
              onChange={(e) => this.setValue
            ("num_orden", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Valor_Orden</Form.Label>
              <Form.Control onChange= {(e) => this.setValue
            ("valor_orden", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha_Asignación</Form.Label>
              <Form.Control onChange= {(e) => this.setValue
            ("fecha_asignacion", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Actividad</Form.Label>
              <Form.Control onChange= {(e) => this.setValue
            ("actividad", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre_Sitio</Form.Label>
              <Form.Control onChange= {(e) => this.setValue
            ("nombre_sitio", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha_Instalación</Form.Label>
              <Form.Control onChange= {(e) => this.setValue
            ("fecha_instalacion", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha_Integración</Form.Label>
              <Form.Control onChange= {(e) => this.setValue
            ("fecha_integracion", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha_Documentación</Form.Label>
              <Form.Control onChange= {(e) => this.setValue
            ("fecha_documentacion", e.target.value)}/>
            </Form.Group>

            <Button
            variant="primary" 
            onClick={() => console.log(this.guardarEjecuciones())}
            >
              Guardar Ejecución
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
