import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';

function NavbarComp() {
    const isLogin = false;

    if (isLogin) {
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img src="../assets/icon.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <img src="../assets/chart.png" className="img-chart" />
                            <img src="../assets/user.png" className="img-user" />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    } else {
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img src="../assets/icon.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Regis />
                            <Login />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

function Regis() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [as, setAs] = useState('');

    const handleRegis = (e) => {
        e.preventDefault()
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        let name = e.target.elements.name.value;
        let gender = e.target.elements.gender.value;
        let phone = e.target.elements.phone.value;
        let as = e.target.elements.as.value;

        setEmail(email)
        setPassword(password)
        setName(name)
        setGender(gender)
        setPhone(phone)
        setAs(as)
    }

    console.log(email);
    console.log(password);
    console.log(name);
    console.log(gender);
    console.log(phone);
    console.log(as);

    const toLogin = (e) => {
        e.preventDefault();
        Login();
    }


    return (
        <div>
            <Button className="btn btn-sm btn-auth" onClick={handleShow}>Register</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="mx-3">
                    <div className="register-header mb-4">Register</div>
                    <Form className="register" onSubmit={handleRegis}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" name="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput2">
                            <Form.Control type="password" name="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput3">
                            <Form.Control type="text" name="name" placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput4">
                            <Form.Control type="text" name="gender" placeholder="Gender" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput5">
                            <Form.Control type="text" name="phone" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select" name="as">
                                <option value="user">As User</option>
                                <option value="partner">As Partner</option>
                            </Form.Control>
                        </Form.Group>
                        <Button type="submit" className="btn btn-modal btn-block mt-4">Register</Button>
                    </Form>
                    <p className="text-muted text-center mt-3">Already have an account ?  Klik <a href="#" onClick={toLogin} className="text-dark">Here</a></p>
                </Modal.Body>
            </Modal>
        </div>
    )
}


function Login() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button className="btn btn-sm btn-auth" onClick={handleShow}> Login</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="mx-3">
                    <div className="register-header mb-4">Register</div>
                    <Form className="register">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Gender" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Control as="select">
                                <option>As User</option>
                                <option>Customer</option>
                                <option>Driver</option>
                                <option>Seller</option>
                            </Form.Control>
                        </Form.Group>
                        <Button className="btn btn-modal btn-block mt-4">Register</Button>
                    </Form>
                    <p className="text-muted text-center mt-3">Already have an account ?  Klik <a href="#" className="text-dark">Here</a></p>
                </Modal.Body>
            </Modal>
        </>
    )
}


export default NavbarComp;
