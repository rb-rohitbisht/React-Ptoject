import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {Consumer} from '../context'

const Product = ({product}) => {
    const {id, title , img , price , inCart } = product
    return (
    <ProductWrapper className="col-9 mx-auto col-mb-6 col-lg-3 my-3">
        <div className="card">
            <Consumer>
                {(value)=>{
                return(
                    <div className="img-container p-5" onClick={()=> value.handelDetail(id)}>
                    <Link to='/details'>
                        <img src={img} alt='product' className="card-img-top" />
                    </Link>

                    
                      
                    <button
                     className="cart-btn" 
                     disabled={inCart ? true : false} 
                      onClick={()=>{value.addToCart(id); value.openModel(id)}}>
                      {inCart ? (<p className="text-capitalize mb-0" disabled>inCart</p>) : (<i className="fas fa-cart-plus"/>) }
                      </button>
           
                </div>
                )}
                }
            </Consumer>
             {/* card footer */}
            <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0"><span className="mr-1">₹</span>{price}</h5>
            </div>
        </div>
    </ProductWrapper>);
}
 
export default Product;

Product.propTypes = {
    product:PropTypes.shape({
        title: PropTypes.string ,
        img: PropTypes.string ,
        price: PropTypes.number ,
        inCart: PropTypes.bool 
    }).isRequired
};
 
const ProductWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(242,44,55);
    }
    .card-footer{
        background: rgba(247 , 247, 247);
    }
    .img-container{
        background: rgba(216,201,201);
    }
}
.img-container{
    position: relative;
    overflow: hidden;
    background: rgba(299,247,240);
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0 ;
    right: 0 ;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0 ;
    transform: translate(100% , 100%);
    transition: all 1s linear;
}

.img-container:hover .cart-btn{
    transform: translate(0,0);
    transition: all 0.8s ease-in-out;
    
}
.cart-btn:hover{
    color: var(--mainBlue);
    cursor:pointer;
}
`;