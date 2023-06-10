import "./Projects.css";
import { Container, Row, Col } from 'reactstrap';

const Projects = () => {
  return (
    <div className="Projects">
      <Container>
        <Row>
          <h2 className="h1">Projects</h2>
        </Row>

        <Row>
          <div className="img-wrapper">
            <a 
              href="https://kevin-jobly.surge.sh/" 
              target="_blank" 
              rel="noreferrer"
            >
              <figure>
                <img src="./jobly.png" alt="Jobly demo" className="img-fluid"></img>
              </figure>
            </a>
          </div>
          <div className="projects-details text-center">
            <div><b>Jobly</b></div>
            <div>Job listing single page React application for viewing and submitting job applications.</div>
          </div>
        </Row>
        <Row>
          <div className="img-wrapper">
            <a 
              href="https://kevinnguyen-warbler.onrender.com/" 
              target="_blank" 
              rel="noreferrer"
            >
              <figure>
                <img src="./warbler.jpg" alt="Warbler demo" className="img-fluid"></img>
              </figure>
            </a>
          </div>
          <div className="projects-details text-center">
            <div><b>Warbler</b></div>
            <div className="last-detail">Replica of a social media site, where users can follow other users and post/like messages.</div>
          </div>
        </Row>
      </Container>

    </div>
  )
}

export default Projects