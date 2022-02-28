
import { Link } from 'react-router-dom'; 
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../logos/pngwing.com.png';
import { useState } from 'react';

function Header () {

    const [user] = useState({
        id: '4'
      })

        return(
        <header className="App-header">
            <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                    The ultimate album database
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                    <div className="navbar">
                    <Nav>
                        <NavItem>
                            <NavLink href="/bands">Bands</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/albums">Albums</NavLink>
                        </NavItem>
                    </Nav>
                    </div>
                </Col>
                </Row>
        </header>
        )
    }

export default Header;


