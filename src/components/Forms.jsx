import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import formImg from '../assets/celeb.png'; 
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Forms() {
  return (
    <>
    <Container>
      <Row>
          <Col md={6} className='mt-5'>
          <div className="text-center mt-4">
              <h1 style={{ fontSize: '2.9rem', color: '#62cff4' , fontWeight:"100"}}> Unlock Exclusive Benefits </h1>
          </div>     

          <Row className="g-2 mt-4">
              <Form.Label> PHONE NO </Form.Label>
              <Col md>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select aria-label="Floating label select example" className='border rounded-pill border-dark' >
                  <option className='mb-2'>+91 India</option>
                  <option value="1">+01</option>
                  <option value="2">+06</option>
                  <option value="3">+07</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control className='border rounded-pill border-dark'  type="email" placeholder="9645789210" />
            </Form.Group>
            </Col>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> NAME </Form.Label>
              <Form.Control type="text" placeholder="" className='border rounded-pill border-dark' style={{ border: "1px solid black", borderRadius:"24px"}}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> EMAIL [OPTIONAL] </Form.Label>
              <Form.Control className='border rounded-pill border-dark'  type="email" placeholder="" />
            </Form.Group>

            <Link to="/"><Button className='w-100 border rounded-pill border-dark bg-blue-400 font-medium' > CONTINUE </Button></Link>
            <span> Get ready to receive a secret code (OTP) on your phone. </span>
          </Row>

          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center mt-5">
            <img className='mt-4' src={formImg} alt="Form Image" style={{ maxWidth: '100%', height: 'auto' }} />
          </Col>

        
      </Row>
    </Container>
    </>
  )
}

export default Forms;