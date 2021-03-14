import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';


import { UserContext } from "../contexts/userContext";
import { CartContext } from "../contexts/cartContext";

function RestNearYou() {
    const path = '../assets/rest-near-you/';
    const data = [
        {
            id: 'r1',
            nama: 'Geprek Bensu',
            jarak: '0,2 KM',
            logo: path + 'gb.png'
        },
        {
            id: 'r2',
            nama: 'Nasi Goreng Mas Rony',
            jarak: '0,6 KM',
            logo: path + 'ns.png'
        },
        {
            id: 'r3',
            nama: 'Pecel Ayam Prambanan',
            jarak: '0,6 KM',
            logo: path + 'pa.png'
        },
        {
            id: 'r4',
            nama: 'Kopi Kenangan',
            jarak: '1,6 KM',
            logo: path + 'kk.png'
        }
    ];

    const [state, dispatch] = useContext(UserContext);
    const [stateCartRNY, dispatchCartRNY] = useContext(CartContext);

    const [Message, setMessage] = useState('');
    const [showL, setShowL] = useState(false);
    const [showR, setShowR] = useState(false);
    const [userRegis, setUserRegis] = useState({});

    const handleCloseL = () => setShowL(false);
    const handleShowL = () => setShowL(true);
    const handleCloseR = () => setShowR(false);
    const handleShowR = () => setShowR(true);

    const SelectRest = (e) => {

        if (!state.isLogin) {
            e.preventDefault();
            setShowL(true);
        } else {
            dispatchCartRNY({
                type: "ADD_RESTAURANT",
                payload: e
            });
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();

        let emailLData = e.target.elements.emailLogin.value;
        let passwordLData = e.target.elements.passwordLogin.value;

        const dataUserLogin = {
            email: emailLData,
            password: passwordLData
        };

        if (emailLData == 'user@gmail.com') {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: dataUserLogin
            });
            setShowL(false);
        } else if (emailLData == 'partner@gmail.com') {
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: dataUserLogin
            });
            setShowL(false);
        } else {
            setMessage('Email salah!')
        }
        console.log('HandleRestauran-near-you')
    }
    console.log(state);

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

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="text-dark playfair header-content mt-5 mb-3">
                            Restaurant Near You
                        </div>
                    </Col>
                    {data.map(item =>
                        <Col md={3} key={item.id}>
                            <Link className="text-rest" onClick={() => SelectRest(item)} to={{ pathname: "/menus/" + item.id, }}>
                                <div className="card card-rest">
                                    <div className="card-body p-2 text-center">
                                        <img src={item.logo} className="img-fluid" alt="img" />
                                        <div className="text-left text-dark ml-2 mt-2">
                                            <b className="playfair">{item.nama}</b>
                                            <p className="mb-0">{item.jarak}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    )
                    }
                </Row>
            </Container>
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

export default RestNearYou;
