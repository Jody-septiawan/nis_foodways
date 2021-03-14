import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';

import { CartContext } from "../contexts/cartContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


function CartOrder() {

    const [stateCartDetail, dispatchCartDetail] = useContext(CartContext);

    const IncOrder = (item) => {
        dispatchCartDetail({
            type: "ADD_CART",
            payload: item
        });
    }

    const DecOrder = (item) => {
        dispatchCartDetail({
            type: "DECREMENT_CART",
            payload: item
        });
    }

    const DeleteOrder = (item) => {
        dispatchCartDetail({
            type: "DELETE_CART",
            payload: item
        });
    }

    const QtyOrder = stateCartDetail.carts.length;

    var SubTotal = 0;
    var TmpSubTotal = 0;
    var Total = 0;

    for (var i = 0; i < QtyOrder; i++) {
        var TmpSubTotal = 0;
        TmpSubTotal = stateCartDetail.carts[i].harga * stateCartDetail.carts[i].qty
        SubTotal = SubTotal + TmpSubTotal;
    }
    Total = SubTotal + 10000;


    return (
        <Container className="my-5">
            <Row>
                <Col md={12}>
                    <div className="text-dark playfair header-content mt-5 mb-4">
                        Geprek Bensu
                    </div>
                    <div className="text-rest mb-1">
                        Delivery Location
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className="text-rest mb-1">
                        Review Your Order
                    </div>
                </Col>
                <Col md={7}>
                    <div className="line-cart mb-2 mt-2"></div>
                    {stateCartDetail.carts.map(item =>
                        <div key={item.id}>
                            <Row className="py-2">
                                <Col xs={3}>
                                    <img src={item.img} className="img-carts" />
                                </Col>
                                <Col xs={6}>
                                    <div className="playfair text-nama-menu-cart mt-3">{item.nama}</div>
                                    <div className="mt-2">
                                        <FontAwesomeIcon icon={faMinus} onClick={() => DecOrder(item)} className="text-rest icon-click" />
                                        <span className="cart-qty">{item.qty}</span>
                                        <FontAwesomeIcon icon={faPlus} onClick={() => IncOrder(item)} className="text-rest icon-click" />
                                    </div>
                                </Col>
                                <Col xs={3}>
                                    <div className="text-danger text-right mt-3">
                                        <div>
                                            Rp. {item.harga}
                                        </div>
                                        <div className="mt-2">
                                            <img src='../assets/trash.png' onClick={() => DeleteOrder(item)} className="img-trash-cart icon-click" />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="line-cart my-2"></div>
                        </div>
                    )
                    }l
                </Col>
                <Col md={5}>
                    <div className="line-cart my-2"></div>
                    <Row>
                        <Col xs={6}>
                            <div className="mb-2 mt-3">Subtotal</div>
                            <div className="mb-2">Qty</div>
                            <div className="mb-3">Ongkir</div>
                        </Col>
                        <Col xs={6}>
                            <div className="mb-2 mt-3 text-right text-danger">Rp {SubTotal}</div>
                            <div className="mb-2 text-right">{QtyOrder}</div>
                            <div className="mb-3 text-right text-danger">Rp {QtyOrder != 0 ? 10000 : 0}</div>
                        </Col>
                    </Row>
                    <div className="line-cart my-2"></div>
                    <Row>
                        <Col xs={6}>
                            <div className="mb-2 mt-3 text-total-pembayaran-cart">Total</div>
                        </Col>
                        <Col xs={6}>
                            <div className="mb-2 mt-3 text-right text-danger text-total-pembayaran-cart">Rp {Total}</div>
                        </Col>
                        <Col xs={12} className="text-right">
                            <button className="btn btn-sm btn-dark px-5 btn-order-cart mt-5">Order</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CartOrder;