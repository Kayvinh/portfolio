import "./About.css";
import { Container, Row, Col } from 'reactstrap';
// import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <div className="About">
      <Container>
        <Row>
          <h1 className="h1">
            <span className="about-header">About</span>
          </h1>
        </Row>
        <Row lg-2>
          <Col lg="8">
            <div className="about-details">
              Hello there! My name is Kevin and I am a software engineer. My 
              journey started when I first stepped foot on campus of University 
              of Nevada, Las Vegas. I graduated with a BA in computer science 
              and have had a passion for technology ever since. After college I 
              enrolled in Rithm full-stack developer bootcamp to combine 
              my theoretical skills and enhance my practical skills.
            </div>
            <div className="about-details">
              As a developer, I am constantly seeking opportunities to work in a 
              collaborative environment wheren I can share my skills with the 
              team while also enhancing my capabilities. For me, the learning 
              process never ends, and I am always eager to continue my professional 
              development.
            </div>
          </Col>
          <Col sm="4" xs="8">
            <img src="./self.jpeg" alt="Kevin"></img>
          </Col>
        </Row>
      </Container>

    </div>
    
  )
}

export default About