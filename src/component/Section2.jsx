import React from 'react';
import Man from './vision.d6600ebc.png'
import logo from './logo.png';

const Section2 = () => {

    return (
     <div>
        <div className="section2">
            <div className="newsletter">
                <div className="get">
                    <div className="subsc">
                        <h2>Subscribe to our newsletter</h2>
                        <p>Get exclusive discounts and latest news deliverd to your inox for free!</p>
                    </div>
                    <div className="inputo">
                        <div className="mail">
                            <input type="text" placeholder='Email' />
                            <botton className="subm">Submit</botton>
                        </div>
                    </div>
                </div>
            </div>
            <div className="build">
                <div className="laptopMan">
                    <img src={Man} alt="" srcset="" />
                </div>
                <div className="let">
                    <h1>Let’s Build Something Great Together</h1>
                    <p>We are on this journey together with you, our structured learning curriculum is coupled with a supervised feature. As much as we are sure that our courses are simplified and easy for any kind of student to learn. We don’t dispute the fact that mentorship and direction given by experienced tutors can fast track the process you can make in your career journey</p>
                    <div className="read">
                        <button className="bott">Talk to a mentor</button>
                    </div>
                </div>
            </div>

        </div>
        <div className="footer">
            <div className="quick">
                <div className="make">
                    <img src={logo} alt="" srcset="" />
                    <p>We make structured and supervised learning possible. Our students have 100% career leap when they jump on a High Rewarding Skill</p>
                </div>
                <div className="lank">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Courses</li>
                        <li>Career</li>
                        <li>Organization</li>
                        <li>Community</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="lank">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>+234 816 050 4976</li>
                        <li>info@cholatrek.io</li>
                        <li>House 5 Green Garage,</li>
                        <li>Stateline RD FUTA south gate,</li>
                        <li>Akure, Ondo state Nigeria</li>
                    </ul>
                </div>
                <div className="lank">
                    <ul>
                        <li>Get Started</li>
                        <li>Roadmap</li>
                        <li>Scholarships</li>
                        <li>Terms and Condition</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <b>All rights reserved|Cholatrek 2021</b>
                <b>Privacy Policy</b>
            </div>
        </div>
     </div>
    );
}

export default Section2;