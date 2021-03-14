import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import React, { useContext, useState } from 'react';

import { CartContext } from "../contexts/cartContext";


function Profile() {
    const [stateCartDetail, dispatchCartDetail] = useContext(CartContext);
    console.log("Trans:", stateCartDetail.transaction.length);

    return (
        <>
            <Container className="my-5 py-5">
                <Row>
                    <Col xs={6}>
                        <div className="playfair text-header-profile mb-4">
                            My Profile
                        </div>
                        <div className="box-img-text">
                            <img src="../assets/user-square.png" className="rounded" />
                            <span className="ml-3">
                                <div className="h5 text-rest mb-4">
                                    Full Name
                                    <div className="text-dark text-data-profile">
                                        User
                                    </div>
                                </div>
                                <div className="h5 text-rest mb-4">
                                    Email
                                    <div className="text-dark text-data-profile">
                                        user@gmail.com
                                    </div>
                                </div>
                                <div className="h5 text-rest mb-4">
                                    Phone
                                    <div className="text-dark text-data-profile">
                                        08512384882
                                    </div>
                                </div>
                            </span>
                        </div>
                        <button className="btn text-light btn-modal btn-sm btn-edi-profile mt-3">Edit Profile</button>
                    </Col>
                    <Col xs={6}>
                        <div className="playfair text-header-profile mb-4">
                            History Order
                        </div>
                        {stateCartDetail.transaction.map(item =>
                            <div className="card mb-1">
                                <div className="card-body py-2">
                                    <div className="box-2-column-text">
                                        <div className="">
                                            <div className="playfair mb-2"><b>{item.name}</b></div>
                                            <div>{item.date}</div>
                                            <div className="text-rest mt-3"><b>Total : Rp {item.total}</b></div>
                                        </div>
                                        <div className="ml-3 text-right d-block">
                                            <img src="../assets/icon.png" />
                                            <div className="mt-4">
                                                <span className="bg-finished px-4 py-1 rounded">{item.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        }
                        {stateCartDetail.transaction.length == 0 && <i className="text-muted">No History Order</i>}
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default Profile;