import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navba = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow p-3 mb-5 bg-white rounded">
    <Container>
    <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="https://res.cloudinary.com/ds04ivdrj/image/upload/v1687970043/companylogo_lma1s8.png" width="100" height="100" alt="" />
    </a>
  </nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className='nav-links '>Home</Link>
          <Link to="/about" className='nav-links' >About Us</Link>
          <Link to="/service" className='nav-links'>Services</Link>
          <Link to="/products" className='nav-links' >Products</Link>
          <Link to="/blog" className='nav-links'>Blogs</Link>
          <Link to="/contact" className='nav-links'>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navba;