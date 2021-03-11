import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import logo from '../assets/icon.png';

function NavbarComp() {
    return (
        <div>
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <img src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button className="btn btn-sm btn-auth">Register</Button>
                        <Button className="btn btn-sm btn-auth">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComp;
