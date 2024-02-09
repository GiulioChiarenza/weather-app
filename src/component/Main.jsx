import { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardText } from 'react-bootstrap';
import {Figure, FigureImage} from 'react-bootstrap';

const Main=()=>{


    return(
        <Row id='main'>
        <Card>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Map_of_the_world_with_countries_and_dependencies.svg/1200px-Map_of_the_world_with_countries_and_dependencies.svg.png" />
        <Card.Body>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text> */}
        </Card.Body>
      </Card>
      
      <Col xs={6} md={6} className='mt-5'>
      <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="171x180"
        src="https://www.ilmeteo.it/portale/files/giornale/thumb_Weekend-9224.jpg"
      />
      </Figure>
        </Col>
      <Col xs={6} md={4} className='mt-5'>
        <div>
            <h2 className='main-h2'>Meteo WEEKEND</h2>
            <p>il Ciclone Pulcinella oscura il Carnevale: Sabato e Domenica con Pioggia, Vento e Neve</p>
        </div>
      </Col>
      <hr />
      <Col xs={6} md={6} className='mt-5'>
      <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="171x180"
        src="https://www.ilmeteo.it/portale/files/giornale/thumb_prossima-settimana-8224.jpg"
      />
      </Figure>
        </Col>
      <Col xs={6} md={4} className='mt-5'>
        <div>
            <h2 className='main-h2'>Meteo: PROSSIMA SETTIMANA</h2>
            <p>in Bilico e ci può essere un colpo di scena proprio per San Valentino</p>
        </div>
      </Col>
      <hr />
      <Col xs={6} md={6} className='mt-5'>
      <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="171x180"
        src="https://www.ilmeteo.it/portale/files/giornale/thumb_marzo-freddo-5223.jpg"
      />
      </Figure>
        </Col>
      <Col xs={6} md={4} className='mt-5'>
        <div>
            <h2 className='main-h2'>Meteo: MARZO freddo?</h2>
            <p>Le prime Previsioni sono già attendibili, vediamole</p>
        </div>
      </Col>
      <hr />
      <Col xs={6} md={6} className='mt-5'>
      <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="171x180"
        src="https://www.ilmeteo.it/portale/files/giornale/thumb_sciame-sismico-parma-090224.JPG"
      />
      </Figure>
        </Col>
      <Col xs={6} md={4} className='mt-5'>
        <div>
            <h2 className='main-h2'>TERREMOTO</h2>
            <p>sciame sismico in corso nel Parmense, cosa sta succedendo</p>
        </div>
      </Col>
      <hr />
      <Col xs={6} md={6} className='mt-5'>
      <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="171x180"
        src="https://www.ilmeteo.it/portale/files/giornale/thumb_neve-8224.jpg"
      />
      </Figure>
        </Col>
      <Col xs={6} md={4} className='mt-5'>
        <div>
            <h2 className='main-h2'>Meteo: NEVE</h2>
            <p> è in arrivo il più grosso carico di tutto l'Inverno! Fino ad 1 metro di accumulo, quando e dove</p>
        </div>
      </Col>
      </Row>
    )
}
export default Main