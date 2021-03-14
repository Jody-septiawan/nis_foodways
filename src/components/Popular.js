import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PopularRestData from './Popular-rest-data';


function PopularRest() {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="text-dark playfair header-content mt-5 mb-3">
                            Popular Restaurant
                        </div>
                    </Col>
                    {PopularRestData.map(item =>
                        <Col md={3} key={item.id}>
                            <Link className="text-rest" to={{ pathname: "/menus/" + item.id, }}>
                                <div className="card card-rest">
                                    <div className="card-body playfair py-3">
                                        <img src={item.logo} className="img-fluid mr-3" alt="img" />
                                        <b className="text-dark">{item.nama}</b>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    )
                    }
                </Row>
            </Container>
        </div >
    );
}

export default PopularRest;
