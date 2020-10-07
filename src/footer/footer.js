import React from 'react';
import './footer.css';



const Footer = () => {
    return (
        <div>
        <br/>
		<br/><br/>
            
            <div className="divLast">
                	
            <div className="container" align="center" face="Arial">
                <div className="row" style={{color: 'white'}}>
                    <div className="col-md-4">
                        <h4>
                            <font face="Arial">CONTACT US</font>
                        </h4>
                        <p className="fa fa-star">&nbsp;&nbsp;
                            <font face="Arial" size="2">55 Main St.<br />
							    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Toronto, ON<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;M1H 3A5
                                </font>
                        </p><br />
                        <p className="fa fa-tablet">&nbsp;&nbsp;(416) 555-5252</p><br />
                        <p className="fa fa-envelope">&nbsp;&nbsp;hello@treehouse.com</p>
                        <br />
                    </div>
                    <div className="col-md-4">
                        <h4>
                            <font face="Arial">LATEST POSTS</font>
                        </h4>
                        <p className="fa fa-photo">&nbsp;<font face="Arial" size="2">Made With Love In Toronto</font>
                        </p>
                        <p className="fa fa-newspaper-o">&nbsp;&nbsp;<font face="Arial" size="2">Startup News & Emerging
							Tech</font>
                        </p>
                        <p className="fa fa-photo">&nbsp;&nbsp;<font face="Arial" size="2">Bitcoin Will Soon Rule The
							World</font>
                        </p>
                        <p className="fa fa-photo">&nbsp;&nbsp;<font face="Arial" size="2">Wearable Technology On The Rise
						</font>
                        </p>
                        <p className="fa fa-play">&nbsp;&nbsp;<font face="Arial" size="2">Learn Web Design In 30 Days!
						</font>
                        </p><br />
                    </div>
                    <div className="col-md-4">
                        <h4>
                            <font face="Arial">LATEST TWEETS</font>
                        </h4>
                        <p className="fa fa-twitter">&nbsp;&nbsp;<font face="Arial" size="2">Confucius: Life is really
							simple, <br />
							but we insist on making it <br />
							complicated. <br />
							#famousquotes<br />
							8 mins ago</font>
                        </p><br />
                        <p className="fa fa-twitter">&nbsp;&nbsp;<font face="Arial" size="2">Grab the Free Treehouse
							web<br />
							template at FreebiesXpress! <br />
							#freebies #templates<br />
							2 days ago</font>

                        </p>
                    </div>
                </div>

            </div>
            </div>









        </div>
    )
}
export default Footer;