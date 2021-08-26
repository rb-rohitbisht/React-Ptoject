import React from 'react';
import {Link} from 'react-router-dom'


import {ButtonContainer} from './button'
import styled from 'styled-components'

const NavBar = () => {
    return ( 
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
            
                
                
                <i class="fas fa-home"></i>
                
                
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">products</Link>
                </li>
            </ul>
            <div class ="centre">
                <h1>Apni<span>Dukan</span></h1>
                <p>vocal for local</p>
            </div>
            
            <i class="fas fa-bell"></i>

            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    
                    <i class="far fa-cart-plus"></i>
                    </span>
                </ButtonContainer>
            </Link>

        </NavWrapper>
     );
}
 
export default NavBar;

const NavWrapper = styled.nav`
//  background: var(--mainBlue);
background: rgb(128, 180, 248);
 .nav-link{
     color: var(--mainWhite) !important;
     font-size:1.3rem;
     text-transform: capitalize ;
     
 }
 .fa-cart-plus{
    //  color: black;
     color: rgb(73, 73, 70);
      font-size: 30px;
    
 
    
 }
 .fa-home{
    
     color: rgb(73, 73, 70);
      font-size: 40px;
 }

 .centre{
    margin-left: 25rem;
 }
 .centre h1{
    
    color: black;
    font-weight: bold;
    letter-spacing: 5px;
    font-size: 40px;
}
.centre span{
    color: white;
}
 .centre p{
    color: rgb(126, 7, 7);
    font-size: 18px;
    margin-top: 3px;
}
 .fa-bell{
    margin-left: 32rem;
    font-size: 30px;
}
`

