import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Row, Col, Button } from 'react-bootstrap';
import membershipImg from '../assets/membership-removebg-preview.png'
import { Card } from 'react-bootstrap';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Design1.css';
import { Link } from 'react-router-dom';

function Design1() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <>
     <Navbar bg="" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className='ms-3' active>Home</Nav.Link>
            <Nav.Link href="#dashboard" className='ms-3'>Dashboard</Nav.Link>
            <Nav.Link href="#products" className='ms-3'>Products</Nav.Link>
            <Nav.Link href="#transactions" className='ms-3'>Transactions</Nav.Link>
            <Nav.Link href="#journal" className='ms-3'>Journal</Nav.Link>
          </Nav>
          <Nav className=''>
            <Nav.Item className=" align-items-center ">
              <i class="fa-solid fa-user-tie ms-4 fa-xl" style={{color:"#62cff4"}}></i><br/>
              <span className="me-2" style={{fontWeight:"bold"}}> Sandeep S S</span>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    <Container>
        <Row>
           <Col md={4} className="d-flex flex-column">
               <div className="d-flex justify-content-between pt-4">
                  <h2 style={{fontSize:"2rem"}}>New Arrival</h2>
                  <div style={{ flex: 1 }}></div>
                </div>
                   <p> JOIN TODAY </p>
                   <img src={membershipImg} alt='no img' className='pb-5 ms-5' style={{width:"70%", height: '50vh', border: 'none' }}/>
                   <Link to='/form '><Button className='btn-grad1 border rounded-pill w-100'> JOIN NOW </Button></Link>
           </Col>

            <Col md={8}>
                <div className="text-center mt-4">
                    <h1 style={{ fontSize: '2.5rem', color: '#62cff4', fontWeight:"100" }}> Unlock Premium Features Now </h1>
                </div>

                <div className="slider-container w-100 m-auto mt-3">
                <Slider {...settings}>
                  <div className="px-md-4">
                    <Card className="w-100">
                     <Card.Img variant="top" src={img2} />
                     <Card.Body>
                      <Card.Title className="text-xl font-medium mb-0 text-center " style={{color: '#007991'}}>Lower Interest Rates</Card.Title>
                     </Card.Body>
                    </Card>
                  </div>

                <div className="px-md-4">
                  <Card className="w-100">
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                      <Card.Title className="text-xl font-medium mb-0 text-center" style={{color: '#007991'}}>Interest Free Payment</Card.Title>
                    </Card.Body>
                  </Card>
                </div>

                <div className="px-md-4">
                  <Card className="w-100">
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                      <Card.Title className="text-xl font-medium mb-0 text-center" style={{color: '#007991'}}>Discount on material</Card.Title>
                    </Card.Body>
                  </Card>
                </div>
              </Slider>
            </div>
            
            <div className="d-flex justify-content-center mt-2">
               <Button className='btn-grad border rounded-pill  text-light mt-4 w-25' style={{backgroundColor:"blue"}}> JOIN NOW </Button>    
            </div>
            <div className="d-flex justify-content-center ">
                <Button className='btn-grad border rounded-pill  text-light mt-3 w-25' > DETAILS </Button>    
            </div>
          </Col>

        </Row>
    </Container>

    </>
  )
}

export default Design1


         
