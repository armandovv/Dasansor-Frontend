import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import CardGroup from 'react-bootstrap/CardGroup';
import "./servicios.css";

export default class servicios  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
          <Container>
                <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
       
       
        <img src={"../Imagenes/Logo4.jpeg" } align="left" style={{width:200, padding: 20}}/> <h2 >Nuestros servicios</h2>
       
        
      </Card.Body>
    </Card>
                 
         <CardGroup>
      <Card>
        <Card.Img variant="top" src="./Imagenes/servicios/modernizacion.jpg"  />
        
          <Card.Footer>
          <small className="text-muted"><br></br> <h3>Modernizacion de estaciones</h3></small>
          </Card.Footer>
       
       
      </Card>
      <Card>
        <Card.Img variant="top" src="./Imagenes/servicios/ampliacion.jpg" />
        <Card.Footer>
          <small className="text-muted"><br></br> <h3>Instalacion de nuevos sitios</h3></small>
          </Card.Footer>
       
      </Card>
      <Card>
        <Card.Img variant="top" src="./Imagenes/servicios/instalacion.jpg" />
        <Card.Footer>
          <small className="text-muted"><br></br> <h3>Ampliación de redes moviles</h3></small>
          </Card.Footer>
       
       
      </Card>
      <Card>
        <Card.Img variant="top" src="./Imagenes/servicios/obras.jpg" />
        <Card.Footer>
          <small className="text-muted"><br></br> <h3>Instalación de obras civiles menores</h3></small>
          </Card.Footer>
       
      </Card>
    </CardGroup>
    <br></br><br></br><br></br><br></br>
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
