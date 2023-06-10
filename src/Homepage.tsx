import "./Homepage.css";
import { FaReact, FaNodeJs, FaPython, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { SiPostgresql, SiFlask } from "react-icons/si";
import { Container } from 'reactstrap';

function Homepage() {
  return (
    <div className="Homepage">
        <Container>
            <h2 className="h1"><span className="span-row-1">Hi,</span></h2>
            <h2 className="h1"><span className="span-row-2">I'm Kevin Nguyen.</span></h2>
            <h2 className="h1"><span className="span-row-3">Software Engineer.</span></h2>
            <p className="h6">I like to build things for the web!</p>
            <div className="skills-icons">
                <FaReact style={{ color: "#48bbf8"}} size="4vw"/>
                <FaNodeJs style={{ color: "green"}} size="4vw"/>
                <FaHtml5 style={{color: "#ff5400"}} size="4vw"/>
                <IoLogoCss3 style={{color: "blue"}} size="4vw"/>
                <IoLogoJavascript style={{color: "yellow"}} size="4vw"/>
                <FaPython style={{color: "black"}} size="4vw"/>
                <SiFlask style={{color: "red"}} size="4vw"/>
                <SiPostgresql style={{color: "teal"}} size="4vw"/>
            </div>
        </Container>
    </div>
  );
}

export default Homepage;