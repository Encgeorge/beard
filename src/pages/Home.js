import HomeCarousel from "../components/carousel";
import { GiBeard,GiComb } from "react-icons/gi";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import{ImScissors} from "react-icons/im"
import Services from "../components/Services";
import NavigationBar from "../components/Navbar";
function Home() {
  return (
    <div className="homepage">
        <NavigationBar/>
        <HomeCarousel/>
        <div className="bg-warning">
        <Container>
            <Row>
                <Col>
               <div className="scissors">
                <ImScissors size={90}/></div>
                <p>Noi oferim ceea ce orice bărbat își dorește - să se așeze pe scaun, să aibă încredere în bărbier și să plece așa cum și-a imaginat.</p>
                </Col>
              
                <Col>
            <div className="titles">
            <h1 >The ultimate beard salon</h1>
            <div className="comb"> 
            <GiComb size={90} color="grey"/>
            </div>
            <div className="comb-second"> 
            <GiComb size={90} color="grey"/>
            </div>
            <p>Specilizarea internațională a bărbierilor noștri în hairtyling-ul clasic-natural face ca tunsorile MEN’S să fie greu de imitat.</p>
            </div>
             
             
            </Col>
          
       <Col>
            <div className="Descriere">
                <GiBeard className="beard" size={90}/>
            <p>Bărbatul modern a “împrumutat” foarte multe din comportamentul femeilor, iar multe barbershopuri s-au adaptat acestor cerințe.</p>
          
    </div>
    </Col>
    </Row>
    </Container>
    </div>
    <Services/>
    </div>
  );
}

export default Home;