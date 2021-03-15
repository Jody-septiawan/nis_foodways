import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Container, Row, Col, Modal, Form, Button } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';

import { UserContext } from "../contexts/userContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faMap, faMapMarker, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import ReactMapGL from 'react-map-gl';

function AddProduct() {

    const [stateUser, dispatchUser] = useContext(UserContext);

    const [DataAddProduct, setDataAddProduct] = useState([])

    const HandleAddProduct = (e) => {
        e.preventDefault();
        // console.log(e.target.elements);
        var title = e.target.elements.title.value;
        var img = e.target.elements.img.value;
        var price = e.target.elements.price.value;

        var data = {
            title: title,
            img: img,
            price: price,
        }

        setDataAddProduct(data);
    }

    useEffect(() => {
        // DataAddProduct = data;

    }, [DataAddProduct]);

    const handleChange = (e) => {
        const aaaaaa = 1;
    }

    return (
        <>
            <Container className="py-5 my-5">
                <Row>
                    <Col xs={12}>
                        <div className="playfair text-header-profile mb-4">
                            Add Product
                        </div>
                        <div>
                            <Form className="register" onSubmit={HandleAddProduct}>
                                <div className="box-edit-profile-grid">
                                    <div className="mr-1">
                                        <input name="title" type="text" placeholder="Title" className="form-control" />
                                    </div>
                                    <div className="custom-file">
                                        {/* <input name="img" type="text" class="form-control" value={stateUser.user.img} id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" placeholder="Image" /> */}
                                        <input name="img" type="file" onChange={handleChange} class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                        <label class="custom-file-label" for="inputGroupFile01">Attach Image</label>
                                    </div>
                                </div>
                                <div className="input-group pt-2">
                                    <input name="price" type="text" placeholder="Price" className="form-control" />
                                </div>
                                <div className="text-right mt-5">
                                    <button type="submit" className="btn btn-dark btn-sm btn-order-cart px-5">Save</button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <pre>{JSON.stringify(DataAddProduct, null, 2).length != 2 && JSON.stringify(DataAddProduct, null, 2)}</pre>
            </Container>
        </>
    )

}

export default AddProduct;