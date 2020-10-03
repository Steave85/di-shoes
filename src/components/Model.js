import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer, ButtonCartContainer, ModelContainer } from './StyledComponent'

export default class Model extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    (value)=>{
                        const {modalOpen, closeModel} = value;
                        const {img, title, price} = value.modalProduct;
                        if(!modalOpen)
                            return null;
                        else{
                            return(
                            <ModelContainer>
                                <div className='container'>
                                    <div className='row'>
                                        <div id='model' className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
                                            <h3>Item added to cart.</h3>
                                            <img src={img} className='img-fluid' alt='product'/>
                                            <h4>{title}</h4>
                                            <h5 className='text-muted'>price : ${price}</h5>
                                            <Link to='/'>
                                                <ButtonContainer onClick={()=>{ closeModel()}}>Go to Store</ButtonContainer>
                                            </Link>
                                            <Link to='/cart'>
                                                <ButtonCartContainer onClick={()=>{ closeModel()}}>Go to Cart</ButtonCartContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModelContainer>
                            )
                        }
                    }
                }
            </ProductConsumer>
        )
    }
}
