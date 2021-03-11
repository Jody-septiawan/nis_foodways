import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function PopularRest() {
    const path = '../assets/popular/';
    const data = [
        {
            id: 1,
            nama: 'Burger King',
            logo: path + 'bk.png'
        },
        {
            id: 2,
            nama: 'Starbucks',
            logo: path + 'sb.png'
        },
        {
            id: 3,
            nama: 'KFC',
            logo: path + 'kfc.png'
        },
        {
            id: 4,
            nama: 'Jco',
            logo: path + 'jco.png'
        }
    ];

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="text-dark playfair header-content mt-5 mb-3">
                            Popular Restaurant
                        </div>
                    </Col>
                    {data.map(item =>
                        <Col md={3} key={item.id}>
                            <div className="card">
                                <div className="card-body playfair py-3">
                                    <img src={item.logo} className="img-fluid mr-3" alt="img" />
                                    <b>{item.nama}</b>
                                </div>
                            </div>
                        </Col>
                    )
                    }
                </Row>
            </Container>
        </div >
    );
}

export default PopularRest;
