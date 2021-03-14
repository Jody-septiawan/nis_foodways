import { useState, useContext } from 'react';
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

import DataUser from '../components/userData';

function NavbarComp() {

    let { id } = useParams();

    const [state, dispatch] = useContext(UserContext);
    const [stateCart, dispatchCart] = useContext(CartContext);

    const [Message, setMessage] = useState('');
    const [showL, setShowL] = useState(false);
    const [showR, setShowR] = useState(false);
    const [userRegis, setUserRegis] = useState({});

    const handleCloseL = () => setShowL(false);
    const handleShowL = () => setShowL(true);
    const handleCloseR = () => setShowR(false);
    const handleShowR = () => setShowR(true);

    const handleLogin = (e) => {
        e.preventDefault();

        let emailLData = e.target.elements.emailLogin.value;
        let passwordLData = e.target.elements.passwordLogin.value;

        var dataLogin = false;

        dataLogin = DataUser.find(
            (user) => user.email === emailLData
        );

        console.log(dataLogin);

        // const dataUserLogin = {
        //     email: emailLData,
        //     password: passwordLData
        // };

        if (dataLogin) {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: dataLogin
            });
        } else {
            setMessage('Email tidak ditemukan')
        }
    }
    // console.log(state);

    const handleShowL2 = (e) => {
        e.preventDefault();
        setShowL(true);
        setShowR(false);
    }
    const handleShowR2 = (e) => {
        e.preventDefault();
        setShowL(false);
        setShowR(true);
    };


    const handleRegis = (e) => {
        e.preventDefault()
        let emailData = e.target.elements.email.value;
        let passwordData = e.target.elements.password.value;
        let nameData = e.target.elements.name.value;
        let genderData = e.target.elements.gender.value;
        let phoneData = e.target.elements.phone.value;
        let asData = e.target.elements.as.value;

        var dataUserRegis = {
            email: emailData,
            password: passwordData,
            nama: nameData,
            gender: genderData,
            phone: phoneData,
            as: asData
        }
        setUserRegis(dataUserRegis)
    }

    const CartClick = (e) => {
        if (stateCart.carts.length == 0) {
            e.preventDefault();
        }
    }

    if (state.isLogin) {
        return (
            <div>
                <Navbar expand="lg" className="fixed-top bg-yellow">
                    <Navbar.Brand>
                        <Link className="text-warning ml-2" to={{ pathname: "/", }}>
                            <img src='../assets/icon.png' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {state.user.email == 'user@gmail.com' ? (
                                <Link className="text-rest" onClick={CartClick} to={{ pathname: "/cart-order/" + id, }}>
                                    <img src="../assets/chart.png" className="img-chart" />
                                    {stateCart.carts.length != 0 &&
                                        <span className="inc-chart d-inline">{stateCart.carts.length}</span>
                                    }
                                </Link>
                            ) : ''}
                            {state.user.email == 'user@gmail.com' ? <img src="../assets/user.png" className="img-user" /> : <img src="../assets/partner.png" className="img-user" />}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div >
        );
    } else {
        return (
            <div>
                <Navbar expand="lg" className="fixed-top bg-yellow">
                    <Navbar.Brand >
                        <Link className="text-warning ml-2" to={{ pathname: "/", }}>
                            <img src='../assets/icon.png' />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Button className="btn btn-sm btn-auth" onClick={handleShowR}>Register</Button>
                            <Button className="btn btn-sm btn-auth" onClick={handleShowL}> Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Modal show={showL} onHide={handleCloseL}>
                    <Modal.Body className="mx-3">
                        <div className="register-header mb-4">Login</div>
                        {Message ?
                            <div className="alert alert-danger py-1 px-2">{Message}</div>
                            : ''
                        }
                        <Form className="register" onSubmit={handleLogin}>
                            <Form.Group controlId="exampleForm.ControlInput1L">
                                <Form.Control type="text" name="emailLogin" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput2L">
                                <Form.Control type="password" name="passwordLogin" placeholder="Password" />
                            </Form.Group>
                            <Button type="submit" className="btn btn-modal btn-block mt-4">Login</Button>
                        </Form>
                        <p className="text-muted text-center mt-3">Don't have an account ? Klik <a href="#" onClick={handleShowR2} className="text-dark">Here</a></p>
                    </Modal.Body>
                </Modal>

                <Modal show={showR} onHide={handleCloseR}>
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
                        <p className="text-muted text-center mt-3">Already have an account ?  Klik <a href="#" onClick={handleShowL2} className="text-dark">Here</a></p>
                        <pre>{JSON.stringify(userRegis, null, 2).length != 2 && JSON.stringify(userRegis, null, 2)}</pre>
                    </Modal.Body>
                </Modal>
            </div >
        );
    }
}


export default NavbarComp;
