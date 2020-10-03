import styled from 'styled-components';

const ButtonContainer = styled.button`
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem;
    text-transform: capitalize;
    font-size: 1.2rem;
    border-radius: 25px;
    background: var(--mainYellow);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightYellow)
    }
`;

const ButtonCartContainer = styled.button`
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0.5rem;
    text-transform: capitalize;
    color: var(--mainWhite);
    font-size: 1.2rem;
    border-radius: 25px;
    background: var(--mainBlack);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover{
        background: var(--lightDark)
    }
`;

const LogoWrapper = styled.span`
    margin: 0;
    font-size: 2.0rem !important;
    color: var(--mainYellow)!important;
`

const NavWrapper = styled.nav`
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;

const ProductWrapper = styled.div`
    .card{
        border-color:transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border: 0.04rem sold rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247, 247, 247);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2)
    }
    .card-img-top{
        transition: all 0.5s linear;
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem; 
        background: var(--mainYellow);
        color: var(--mainDark);
        border: none;
        font-size: 1.5rem !important;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
    }
    .img-container:hover .cart-btn{
        transition: all 0.5s linear;
        transform: translate(0, 0);
    }
    .cart-btn:hover{
        cursor: pointer;
    }
`;

const ModelContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #model{
        background: var(--mainWhite);
    }
`;

export { ButtonContainer, ButtonCartContainer, LogoWrapper, NavWrapper, ProductWrapper, ModelContainer };


