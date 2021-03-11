import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function RestNearYou() {
    const path = '../assets/rest-near-you/';
    const data = [
        {
            id: 1,
            nama: 'Geprek Bensu',
            jarak: '0,2 KM',
            logo: path + 'gb.png'
        },
        {
            id: 2,
            nama: 'Nasi Goreng Mas Rony',
            jarak: '0,6 KM',
            logo: path + 'ns.png'
        },
        {
            id: 3,
            nama: 'Pecel Ayam Prambanan',
            jarak: '0,6 KM',
            logo: path + 'pa.png'
        },
        {
            id: 4,
            nama: 'Kopi Kenangan',
            jarak: '1,6 KM',
            logo: path + 'kk.png'
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
                                <div className="card-body p-2 text-center">
                                    <img src={item.logo} className="img-fluid" alt="img" />
                                    <div className="text-left ml-2 mt-2">
                                        <b className="playfair">{item.nama}</b>
                                        <p className="mb-0">{item.jarak}</p>
                                    </div>
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

export default RestNearYou;
