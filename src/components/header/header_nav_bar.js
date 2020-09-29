import React from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import urls from '../../routes/urls'


const HeaderNavBar = () => {
  const links = urls.map(({name, url}) => {
    return(
      <NavLink exact to={url} className='nav-link' key={url}>
        {name}
      </NavLink>
    )
  })
  return(
    <div>
      <Navbar expand={'lg'} variant='dark' bg='dark'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Nav className='w-100 justify-content-between'>
              { [...links] }
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default HeaderNavBar;
