import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {FaCartPlus} from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';
import { ButtonContainer, NavWrapper, LogoWrapper } from './StyledComponent';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm bg-dark navbar-dark px-sm-5'>
                <Link to='/'>
                    <LogoWrapper className='navbar-brand'>
                        <span><GiRunningShoe/>DIShoes</span>
                    </LogoWrapper>
                </Link>
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item ml-5'>
                        <Link to='/' className='nav-link'>Products</Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto'>
                    <ButtonContainer>
                        <span className='mr-2'>
                            <FaCartPlus/>
                        </span>
                        <span className='mr-2'>My cart</span>
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}
