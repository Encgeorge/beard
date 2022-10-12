import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import{ImScissors} from "react-icons/im"
import { GiRazor,GiHairStrands } from "react-icons/gi";
import Button from 'react-bootstrap/Button';


export default function Services() {
  return (
    <div className='servicii'>
       <h2> Services    </h2>
       <Container>
        <Row>
            
            <Col><div className='first-services'>
                <ImScissors size={90}/>
                <div className="tuns">
                <h6>Tuns</h6>
                <p> 80 lei</p>
                </div> 
                <Button href='/rezervari' variant="primary" >Rezervă</Button> 
                 </div>
                 </Col>
            <Col><div className='first-services'>
                <GiHairStrands size={90}/>
                <div className="tuns">
                <h6>Tuns și barbă</h6>
                <p> 95 lei</p>
                </div>
                <Button href='/rezervari' variant="primary" >Rezervă</Button> 
                 </div></Col>
            <Col><div className='first-services'>
                <GiRazor size={90}/>
                <div className="tuns">
                <h6>Barbă</h6>
                <p> 40 lei</p>
                </div>
                <Button href='/rezervari' variant="primary" >Rezervă</Button> 
                 </div></Col>
            
        </Row>
       </Container>
       
        </div>
  )
}
