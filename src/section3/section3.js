import React from 'react';
import './section3.css';

import Client1 from '../Images/client1.jpg';
import Client2 from '../Images/client2.jpg';

import Section4 from '../section4/section4';


const Section3 = () => {

    return (
        <div>
            <div className="container">
                <p align="center" width="76">
                    <font face="Arial" color="black" size="6">
                        <strong style={{ letterSpacing: '-2px' }}><br />
						OUR AWESOME CLIENTS</strong>
                        <br />
                    </font>
                    <div className="p1" >
                        <font face="Roboto Slab" style={{ letterSpacing: '1px' }}>Proin iaculis purus consequant sem cure.</font>
                    </div>
                </p>
                <br /><br />
                <div className="row">
                    <div className="col-md-5" style={{ paddingLeft: '35%' }}>
                        <img className="img-responsive" src={Client1} style={{ borderRadius: '50%', height: '190%', width: '100%' }} />
                    </div>
                    <div className="col-md-7" style={{ backgroundColor: '#F9F9F9' }}>
                        <font face="Roboto Slab" color="grey" style={{ display: 'inline-block', float: ' right', fontSize: '150%' }}>
                            <p>
                                <br />“ Proin iaculis purus consequat sem cure digni ssim<br />
							    donec porttitora entum suscipit aenean rhoncus. ”
                            </p>
                        </font>
                        <p style={{ color: 'lightgreen', textAlign: 'center', fontSize: '70%' }}>
                            <font face="Roboto Slab">Jamie Richardson, Founder of Cocoa Media</font>
                        </p><br />
                    </div>

                </div>
                <br /><br />
                <br /><br />
                <div className="row">

                    <div className="col-md-8">
                        <font face="Roboto Slab" color="grey"
                            style={{ display: 'inline-block', float: 'right', fontSize: '150%', backgroundColor: '#F9F9F9' }}>
                            <p><br /><br />“ Proin iaculis purus consequat sem cure digni ssim<br />
							donec porttitora entum suscipit aenean rhoncus. ”
						<p style={{color: 'lightgreen',textAlign: 'center',fontSize: '60%'}}>
                                    <font face="Roboto Slab">- Kim Thompson, Founder of Rainel</font>
                                </p><br />
                            </p>
                        </font>


                    </div>
                    <div className="col-md-4">
                        <img className="img-responsive" src={Client2} style={{borderRadius: '50%', height: '40%',width: '40%'}} />

                    </div>

                </div>

            </div>
            <Section4 />
        </div>
    )
}
export default Section3;