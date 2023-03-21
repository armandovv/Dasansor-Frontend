import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

export default class inicio  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (  
        
          <Container>
           <div>
                 <Card body>This is some text within a card body.</Card>
                 <img src={"../Imagenes/Logo4.jpeg" } align="left" style={{width:200, padding: 20}}/> <h2>¡conectar es mas simple!</h2>
                 </div>
            <Carousel>
            <Carousel.Item interval={1}>
              <img 
                className="d-block w-100"
                src="../Imagenes/instalacion.jpg"
                alt="First slide"
                height="500 px"
              />
              <Carousel.Caption>
                
                <h3>Conectar es mejor!!</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Imagenes/ampliacion.jpg"
                alt="Second slide"
                height="500 px"
              />
      
              <Carousel.Caption>
                <h3> ¡Ayudamos a conectarte!</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../Imagenes/servicios/modernizacion.jpg"
                alt="Third slide"
                height="500 px"
              />
      
              <Carousel.Caption>
                <h3>Experiencia al implementar!</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿quienes somos?</Accordion.Header>
        <Accordion.Body>
        <h5 align="justify">Todos necesitamos de la electricidad, y esto nos ha motivado a colocar nuestra experiencia a favor de nuestros clientes en los diferentes ámbitos. Nos interesa contribuir a través de nuestro trabajo a la construcción o ampliación de obras civiles que sean de beneficio para la comunidad, ayudando a miles de personas a vivir mejor. La instalación, mejora o ampliación de las redes de cobertura para telefonía móvil que nos permiten contribuir a que millones de personas se comuniquen mejor y a nuestro país en un constante crecimiento.</h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Mision</Accordion.Header>
        <Accordion.Body>
        <h5 align="justify">Dasansor, Es una empresa especializada en brindar soluciones de implementación, modernizacion y ampliacion de tecnologías de telecomunicaciones. Mediante un talento humano competente y comprometido, que desarrolla sus actividades de forma confiable y segura, apoyándose en sistemas de alta calidad. Garantizando alto nivel de calidad y satisfacción total de nuestros clientes. Contribuyendo al desarrollo del sector de telecomunicaciones de la región.</h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Vision</Accordion.Header>
        <Accordion.Body>
        <h5 align="justify">Ser la mejor empresa de instalaciones eléctricas en el país y en Suramérica. Elevar cada vez más los niveles de satisfacción de nuestros clientes, a través de nuestra calidad y servicio.</h5>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
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
