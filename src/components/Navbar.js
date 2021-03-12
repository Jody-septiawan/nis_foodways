import { useState } from 'react';
// import { store, useGlobalState } from 'preact-global-state';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';

// store.init({
//     email: '',
//     password: ''
// });


function NavbarComp() {

    const ImgIcon = "../assets/icon.png";


    var [isLogin, setIsLogin] = useState(false);

    // modal login
    const [showL, setShowL] = useState(false);
    const handleCloseL = () => setShowL(false);
    const handleShowL = () => setShowL(true);

    const [Message, setMessage] = useState();

    const [emailL, setEmailL] = useState('-');
    const [passwordL, setPasswordL] = useState('-');

    const handleLogin = (e) => {
        e.preventDefault();
        let emailLData = e.target.elements.emailLogin.value;
        let passwordLData = e.target.elements.passwordLogin.value;
        setEmailL(emailLData)
        setPasswordL(passwordLData)
        if (emailLData == 'user@gmail.com') {
            setIsLogin(true)
        } else if (emailLData == 'partner@gmail.com') {
            setIsLogin(true)
        } else {
            setMessage('Email salah!')
        }
    }
    // console.log('email login :' + emailL);
    // console.log('password login :' + passwordL);

    // modal regis
    const [showR, setShowR] = useState(false);
    const handleCloseR = () => setShowR(false);
    const handleShowR = () => setShowR(true);

    const handleShowL2 = () => {
        setShowL(true);
        setShowR(false);
    }
    const handleShowR2 = () => {
        setShowL(false);
        setShowR(true);
    };

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

    // console.log(email);
    // console.log(password);
    // console.log(name);
    // console.log(gender);
    // console.log(phone);
    // console.log(as);

    if (isLogin) {
        return (
            <div>
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={ImgIcon} />
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
                    </Modal.Body>
                </Modal>
            </div >
        );
    }
}


export default NavbarComp;
