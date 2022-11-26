import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./ejecuciones.css";
import EjecucionesBuscar from "./crud/buscar";
import EjecucionesCrear from "./crud/crear";
import EjecucionesEditar from "./crud/editar";
//import { tab } from "@testing-library/user-event/dist/tab";

export default class Ejecuciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentTab: "buscar",
        _id: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.setIdEjecucion = this.setIdEjecucion.bind(this);
    this.getIdEjecucion = this.getIdEjecucion.bind(this);
  }

  changeTab(tab){
    this.setState({ currentTab: tab});
  }

  setIdEjecucion(id){
    this.setState({_id: id});
  }

  getIdEjecucion(){
    return this.state._id;
  }

  render() {
    return (
      <Container id="ejecuciones-container">
        <Row>
          <Nav fill variant="tabs" defaultActiveKey="/buscar"
          onSelect={(eventkey) => this.setState({ currentTab: eventkey})}
          >
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
            {this.state.currentTab === "buscar" ?( 
            < EjecucionesBuscar 
            changeTab = {this.changeTab}
            setIdEjecucion = {this.setIdEjecucion}
            /> 
            ): this.state.currentTab === "crear" ? (
            <EjecucionesCrear changeTab= {this.changeTab}/>
            ):(
              <EjecucionesEditar
              changeTab= {this.changeTab}
              getIdEjecucion = {this.getIdEjecucion}/>
            )}
        </Row>
      </Container>
    );
  }
}
