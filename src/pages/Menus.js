import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import DataMenu from '../components/Data-menu';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';

import { CartContext } from "../contexts/cartContext";


function Menus() {

    const [state, dispatch] = useContext(CartContext);


    let { id } = useParams();
    var MenuRest = false;

    MenuRest = DataMenu.find(
        (Rest) => Rest.id === id
    );

    const IncOrder = (item) => {
        dispatch({
            type: "ADD_CART",
            payload: item
        });
    }

    if (MenuRest) {
        return (
            <>
                <Container className="my-5">
                    <Row>
                        <Col md={12}>
                            <div className="text-dark playfair header-content mt-5 mb-3">
                                {MenuRest.nama}, Menus
                        </div>
                        </Col>
                        {MenuRest.menus.map(item =>
                            <Col md={3} key={item.id}>
                                <div className="card">
                                    <div className="card-body p-2">
                                        <img src={item.img} className="img-fluid img-menus" />
                                        <div className="mt-3">
                                            <b className="playfair">{item.nama}</b>
                                            <p className="mb-0 text-danger">Rp. {item.harga}</p>
                                            <Button type="submit" onClick={() => IncOrder(item)} className="btn btn-sm btn-warning btn-block py-0 mt-3">Order</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                        }
                    </Row>
                    {/* <Row>
                        {JSON.stringify(state.carts.length, null, 2)}
                    </Row> */}
                </Container>
            </>
        );
    } else {
        return (
            <>
                <div className="text-center" style={{ marginTop: '100px' }}>
                    <i className="h3">Daftar menu makanan tidak tersedia</i> <br />
                    <a href="/">Back to Home</a>
                </div>
            </>
        )
    }
}

export default Menus;