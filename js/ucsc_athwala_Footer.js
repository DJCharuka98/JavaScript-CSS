import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

function Footer(){
    return(
       <FooterContainer className="main-footer">
        <div className="footer-middle">
        <div className="container">
        <div className="row">
        {/* column 1 */}
        <div className="col-md-5 col-sm-6">
            <h4>UCSC අත්වැල</h4>
            <p>lorehfkdjlkjkvw;lek;welwjkjkjfkdbkfm
                hgjdhfjkwhgklwjekjdjfknk
                jdhjhwejggggggggggggggggggggh
                <br/>
                rthhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </p>
            <i class="fab fa-facebook-square fa-3x"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-twitter-square fa-3x"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-linkedin fa-3x"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="fab fa-github-square fa-3x"></i>
        </div>
         {/* column 2 */}
         <div className="col-md-4 col-sm-6">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
                <li><i class="fas fa-map-marker-alt"></i>&nbsp;UCSC Building Complex,35 Reid Ave,Colombo 7</li>
                <li><i class="fas fa-phone"></i>&nbsp;+94 112128932</li>
                <li><i class="fas fa-envelope"></i>&nbsp;ucscathwala@gmail.com</li>
                
            </ul>
        </div>
         {/* column 3 */}
         <div className="col-md-3 col-sm-6">
            <h4>About Us</h4>
            <ul className="list-unstyled">
                <li><i class="fas fa-user-alt"></i>&nbsp;Uthpala Ruwanara</li>
                <li><i class="fas fa-user-alt"></i>&nbsp;Danu Anjana</li>
                <li><i class="fas fa-user-alt"></i>&nbsp;Abises Weerasekara</li>
                <li><i class="fas fa-user-alt"></i>&nbsp;Anuradha Wikramasinhge</li>
                <li><i class="fas fa-user-alt"></i>&nbsp;Nimasha Supunpraba</li>
            </ul>
        </div>
      
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
            <p className="text-center">
                &copy;{new Date().getFullYear()} UCSC Athwala - All Right Reserved
            </p>
        </div>
        </div>
        </div>
       </FooterContainer>
    );
}
export default Footer;

const FooterContainer = styled.footer`
.footer-middle{
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}
.footer-bottom{
    padding-top:2rem;
    padding-bottom:2rem;
}
.footer-middle{
    position: absolute;
    bottom: 0;
    width: 100%;
   
  }
`;

