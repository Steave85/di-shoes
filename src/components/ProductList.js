import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from './../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='Our' title='Products'/>
                        <div className='row'>
                            <ProductConsumer>
                                {(props)=>{
                                   return props.products.map(product=>{
                                       return <Product key={product.id} product={product} />
                                   })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}