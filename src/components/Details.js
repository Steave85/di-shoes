import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer, ButtonCartContainer } from './StyledComponent'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    const onClickListner = (e) => {
                        value.addToCart(id);
                        value.openModal(id);
                    }
                    return (
                        <div className='container py-5'>
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-10 mx-auto col-md-6 my-3'>
                                    <img src={img} className='img-fluid' alt='product ' />
                                </div>
                                <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                    <h3>model : {title}</h3>
                                    <h4 className='text-title text-uppercase text-muted mt-3 md-2'>
                                        made by : <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4 className='text-title'>
                                        <strong> price : $<span className='text-uppercase'>{price}</span> </strong>
                                    </h4>
                                    <p className='text-uppercase font-weight-bold mt-3 md-0'>Product info:</p>
                                    <p className='text-muted lead'>{info}</p>
                                    <div>
                                        <Link to='/'>
                                            <ButtonContainer>Back to Products</ButtonContainer>
                                        </Link>
                                        <ButtonCartContainer cart disabled={inCart ? true : false} onClick={onClickListner}>
                                            {inCart ? "in cart" : "add to cart"}
                                        </ButtonCartContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
