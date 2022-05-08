import React from "react";
import {
  Button,
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import styles from "./Header.module.css";

const Header = ({ logo, navbar, joinClass }) => {
  return (
    <header>
      <div>
        <Navbar color="light" expand="md" light>
          <Container>
            <NavbarBrand className={styles.logo} href={logo.link}>
              <img src={logo.logo} alt={logo.name} />
              <h1>{logo.name}</h1>
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() {}} />
            <Collapse navbar>
              <Nav className="me-auto" navbar>
                {navbar.map((item, i) => (
                  <NavItem key={i}>
                    <NavLink href={item.link}>{item.nav}</NavLink>
                  </NavItem>
                ))}
              </Nav>
              <NavbarText>
                <Button>{joinClass.name}</Button>
              </NavbarText>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
