import React from 'react';
import Flash from 'react-reveal/Flash';
import "./Footer.css";


const Footer = () => {
    return (
        <div>
            <div>
                <div className='footer_links'>
                    <div>
                        <h5>INFORMATION</h5>
                        <ul>
                            <li>Delivery Information</li>
                            <li>Discount</li>
                            <li>Sitemap</li>
                            <li>Privacy Policy</li>
                            <li>My Account</li>
                        </ul>
                    </div>
                    <div>
                        <h5>MY ACCOUNT</h5>
                        <ul>
                            <li>Delivery Information</li>
                            <li>Discount</li>
                            <li>Sitemap</li>
                            <li>Privacy Policy</li>
                            <li>My Account</li>
                        </ul>
                    </div>
                    <div>
                        <h5>HELP</h5>
                        <ul>
                            <li>Delivery Information</li>
                            <li>Discount</li>
                            <li>Sitemap</li>
                            <li>Privacy Policy</li>
                            <li>My Account</li>
                        </ul>
                    </div>
                    <div>
                        <h5>CONTACT INFO</h5>
                        <ul>
                            <li><i class="fas fa-globe-asia"></i> 1234 Your Address, Country</li>
                            <li><i className="fas fa-phone-alt"></i> +1 234 5678 9999</li>
                            <li><i className="fas fa-envelope"></i> <span>mail@domain.com</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className='copyright_container'>
                    <div>Copyright 2017 RenoshopBee all right reserved - designed by <Flash><span>Md. Sakin Hossain</span></Flash></div>
                    <div>
                        <img src="https://i.ibb.co/m9fWFGR/visa.png" alt="" />
                        <img src="https://i.ibb.co/Mkp4Zyx/paypal.png" alt="" />
                        <img src="https://i.ibb.co/TtnxSzm/amazon.png" alt=""/>
                        <img src="https://i.ibb.co/khb1CrR/mastercard.png" alt="" />
                        <img src="https://i.ibb.co/3h085sJ/amex.png" alt="" />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Footer;