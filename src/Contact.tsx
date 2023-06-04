import React from 'react'
import "./Contact.css";
import { Container, Row, Col, Button } from 'reactstrap';

const Contact = () => {
  return (
    <div className='Contact'>
      <Container>
        <Row>
          <h1 className="h1">
            <span className="contact-header">Contact me</span>
          </h1>
        </Row>
        <Row>
          <p className="d-flex justify-content-center">Whether you have a question or just want to say hi,</p>
          <br></br>
          <p className="d-flex justify-content-center">I’ll try my best to get back to you!</p>
        </Row>
        <Row>
          <a  href="mailto: KayvinhNguyen@gmail.com" className='btn btn-border-1'>Contact</a>
        </Row>
      </Container>
    </div>
  )
}

export default Contact