import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationPrompts from "../../prompts/confirmation";

export default class EjecucionesEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idEjecucion: this.props.getIdEjecucion(),
      rediret : false,
        message: {
          text: "",
          show: false,
        },
        confirmation:{
          title: 'Modificar Ejecución',
          text: '¿Desea modificar la ejecución?',
          show: false,
        },
        loading: false,
        ejecucion: {
          num_orden: "",
          valor_orden: "",
          fecha_asignacion: "",
          actividad: "",
          nombre_sitio: "",
          fecha_instalacion: "",
          fecha_integracion: "",
          fecha_documentacion: "",
        },
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount() {
    this.getEjecucion();
  }

  getEjecucion(){
    this.setState({ loading: true });
    request
    .get(`/ejecuciones/${this.state.idEjecucion}`)
    .then((response) => {
      this.setState({
        ejecucion: response.data,
        loading: false,
        });
    })
    .catch((err) => {
      console.error(err);
      this.setState({ loading: false });
    });
  }
  setValue(inicio, value) {
    this.setState({
        ejecucion: {
            ...this.state.ejecucion,
            [inicio]: value, 
        },
    });
  }
  guardarEjecuciones() {
    this.setState({ loading: true });
    request
    .put(`/ejecuciones/${this.state.idEjecucion}`, this.state.ejecucion)
    .then((response) => {
      if (response.data.exito){
        this.props.changeTab('buscar');
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
  
  onCancel(){
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    })
  }

  onConfirm(){
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    },
    this.guardarEjecuciones()
    );
  }

  render() {
    return (
      <Container id="ejecuciones-editar-container">
        <MessagePrompt
        text = {this.state.message.text}
        show = {this.state.message.show}
        duration = {2500} 
        onExited= {this.onExitedMessage}
        />
        <ConfirmationPrompts 
        show={this.state.confirmation.show}
        title={this.state.confirmation.title}
        text={this.state.confirmation.text}
        onCancel={this.onCancel}
        onConfirm={this.onConfirm}
        />
        <Loading show= {this.state.loading}/>
        <Row>
          <h1>Editar Ejecuciones</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Num_Orden</Form.Label>
              <Form.Control 
              value={this.state.ejecucion.num_orden}
              onChange={(e) => this.setValue
            ("num_orden", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Valor_Orden</Form.Label>
              <Form.Control 
              value={this.state.ejecucion.valor_orden}
              onChange= {(e) => this.setValue
            ("valor_orden", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha_Asignación</Form.Label>
              <Form.Control 
              value={this.state.ejecucion.fecha_asignacion}
              onChange= {(e) => this.setValue
            ("fecha_asignacion", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Actividad</Form.Label>
              <Form.Control 
              value={this.state.ejecucion.actividad}
              onChange= {(e) => this.setValue
            ("actividad", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre_Sitio</Form.Label>
              <Form.Control 
              value={this.state.ejecucion.nombre_sitio}
              onChange= {(e) => this.setValue
            ("nombre_sitio", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha_Instalación</Form.Label>
              <Form.Control 
              value={this.state.ejecucion.fecha_instalacion}
              onChange= {(e) => this.setValue
            ("fecha_instalacion", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha_Integración</Form.Label>
              <Form.Control 
              value={this.state.ejecucion.fecha_integracion}
              onChange= {(e) => this.setValue
            ("fecha_integracion", e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha_Documentación</Form.Label>
              <Form.Control 
              value={this.state.ejecucion.fecha_documentacion}
              onChange= {(e) => this.setValue
            ("fecha_documentacion", e.target.value)}/>
            </Form.Group>

            <Button
            variant="primary" 
            onClick={() => 
            this.setState({
              confirmation: { ...this.state.confirmation, show: true},
            })}
            // onClick={() => console.log(this.guardarEjecuciones())}
            >
              Guardar Editar Ejecución
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}