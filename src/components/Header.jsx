import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import headerImg from '../assets/real-estate-house.png';

function Header() {
  return (
    <>
  <Navbar className="bg-body-tertiary" style={{ height: '60px' }}>
   <Container className="d-flex justify-content-between align-items-center">
    <div>
      <img
        alt=""
        src={headerImg}
        height="110"
        width="100"
        className="d-inline-block align-top mr-2"
      />
    </div>
    <div className="text-center align-items-center justify-center me-5" style={{flex: 1}}>
      <h1 className="h4 mb-0"> XYZ SYSTEM LLP. </h1>
    </div>
  </Container>
</Navbar>


    </>
  );
}

export default Header;
