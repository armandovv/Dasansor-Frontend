import React from "react";
import { Container, Row } from "react-bootstrap";
import "../ejecuciones.css";
import DataGrid from "../../grid/grid";
import ConfirmationPrompts from "../../prompts/confirmation";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
//985 pag


const columns =[{
  dataField: 'num_orden',
  text: 'Numero_Orden',
  hidden: false,
},{
  dataField: 'valor_orden',
  text: 'Valor_Orden'
},{
  dataField: 'fecha_asignacion',
  text: 'Fecha_Asignación'
},{
  dataField: 'actividad',
  text: 'Actividad'
},{
  dataField: 'nombre_sitio',
  text: 'Nombre_Sitio'
},

{
  dataField: 'fecha_instalacion',
  text: 'Fecha_Instalación'
},

{
  dataField: 'fecha_integracion',
  text: 'Fecha_Integración'
},

{
dataField: 'fecha_documentacion',
  text: 'Fecha_Documentación'
}
];

export default class EjecucionesBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //idEjecucion: null,
      loading: false,
      idEjecucion: null,
      confirmation: {
        title: 'Eliminar Ejecución',
        text: '¿Desea eliminar la ejecución?',
        show: false,
      },
      message: {
        text:'',
        show: false,
      },
    };

    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount(){}
  onClickEditButton(row){
    this.props.setIdEjecucion(row._id);
    this.props.changeTab('editar');
  //this.props.showIdEjecucion(row._id);
  //this.props.changeTab('editar');
  }

  onClickDeleteButton(row){
    this.setState({
      idEjecucion: row._id,
      confirmation: {
      ...this.state.confirmation,
      show: true,
      },
    });
  }
  onCancel(){
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    })
  }
  onConfirm() {
    this.setState(
      {
        confirmation: {
          ...this.state.confirmation,
          show: false,

        },
      },
      this.eliminarEjecucion()
    );
  }

  eliminarEjecucion(){
    this.setState({ loading: true });
    request
    .delete(`/ejecuciones/${this.state.idEjecucion}`)
    .then((response) => {
      this.setState({
        loading:false,
        message: {
          text: response.data.msg,
          show: true,
        },
      });
      this.setState({ loading: false });
      //if (response.data.exito) window.location.reload();
      if (response.data.exito) this.reloadPage();
    })
    .catch((err) => {
      console.error(err);
      this.setState({ loading: false });
    });
  }

  reloadPage(){
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {
    return (
      <Container id="ejecuciones-buscar-container">
        <ConfirmationPrompts 
        show={this.state.confirmation.show}
        title={this.state.confirmation.title}
        text={this.state.confirmation.text}
        onCancel={this.onCancel}
        onConfirm={this.onConfirm}
        />

        <MessagePrompt
        text= {this.state.message.text}
        show= {this.state.message.show}
        duration= {2500}
        onExited={this.onExitedMessage}
        />
        <Loading show = {this.state.loading}/>
        <Row>
          <h1>Buscar Ejecuciones</h1>
        </Row>
        <Row>
          <DataGrid
          url= "/ejecuciones" 
          columns= { columns } 
          showEditButton= {true}
          showDeleteButton= {true}
          onClickEditButton = {this.onClickEditButton}
          onClickDeleteButton = {this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
