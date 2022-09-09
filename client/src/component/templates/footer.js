import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="container_footer">
                    <div className="row">
                        <div className="footer-col">
                            <h4>About Us</h4>
                            <ul>
                                <li>
                                    <a href="/">About Us</a>
                                </li>
                                <li>
                                    <a href="/about">Career</a>
                                </li>
                                <li>
                                    <a href="#ser">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>How To Sell Fast</h4>
                            <ul>
                                <li>
                                    <a href="#">How to sell fast</a>
                                </li>
                                <li>
                                    <a href="#">Buy Now on Classipost</a>
                                </li>
                                <li>
                                    <a href="#">Membership</a>
                                </li>
                                <li>
                                    <a href="#">Banner Advertising</a>
                                </li>
                                <li>
                                    <a href="#">Promote your ad</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Help &amp; Support</h4>
                            <ul>
                                <li>
                                    <a href="#">Live Chat</a>
                                </li>
                                <li>
                                    <a href="#">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Stay safe on classipost</a>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Follow Us On</h4>
                            <ul>
                                <li className="contact-info">United Kingdom, Europe</li>
                                <li className="contact-info">+44 203 002 4825</li>
                                <li className="contact-info">example@gmail.com</li>
                                <h4>Social Links</h4>
                                <table>
                                    <tbody>
                                        <tr classname="table_tr">
                                            <td>
                                                <img src="/images/facebook.jpg" classname="social-links" />
                                            </td>
                                            <td>
                                                <img src="/images/twitter.jpg" classname="social-links" />
                                            </td>
                                            <td>
                                                <img src="/images/youtube.jpg" classname="social-links" />
                                            </td>
                                            <td>
                                                <img src="/images/pinterest.jpg" classname="social-links" />
                                            </td>
                                            <td>
                                                <img src="/images/linkedin.jpg" classname="social-links" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
