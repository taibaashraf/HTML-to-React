import React from 'react';
import Phone from '../Images/phone.PNG';

import Section2 from '../section2/section2';

const Section1 = () => {
    return (
        <div>
            <p align="center" width="76" id="LP">
                <font face="Verdana, Geneva, sans-serif" color="black" size="6">
                    <strong><br />
                        <font face="Arial">LATEST PROJECT</font>
                    </strong>
                    <br />
                </font>
                <div className="" style={{letterSpacing: '0px', color: 'grey',textAlign: 'center'}}>
                    <font face="Roboto Slab">Proin iaculis purus consequant sem cure.</font>
                </div>
            </p>
            <br /><br />

            <div className="container">
                <p style={{letterSpacing: '0px'}} width="76">
                    <font face=" sans-serif" color="black" size="3">
                        <strong><br />
                            <font face="Arial">DEVELOPING A FRAMEWORK</font>
                        </strong>
                        <br />
                    </font>
                    <div style={{color: 'grey'}}>
                        <font face="Roboto Slab">Proin iaculis purus consequant sem cure digni ssim<br />donnec porttitora entum
					suscipit aenean rhonus poseure<br />odio in tincidunt.</font>
                    </div>
                </p>

                <p style={{letterSpacing: '-1px'}} width="76">
                    <font face=" sans-serif" color="black" size="3">
                        <strong><br />
                            <ion-icon className="fa fa-trash"
                                ></ion-icon><a
                                    style={{color: 'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font face="Arial">E-Commerce
								Ready</font> <br /></a>
                        </strong>

                    </font>
                    <div style={{color: 'grey'}}>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <font face="Roboto Slab" style={{letterSpacing: '0px'}}>Proin iaculis purus consequant sem cure digni ssim.</font>
                        </p>
                    </div>
                </p>

                <p style={{letterSpacing: '-1px'}} width="76">
                    <font face=" sans-serif" color="black" size="3">
                        <strong>
                            <ion-icon className="fa fa-laptop"
                               style={{fontSize: '40px', borderRadius: '50%',  border: '2px solid black'}}></ion-icon>
                                <a style={{color: 'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <font face="Arial">Powerful SEO Features
                                    </font>
								    <br />
                                </a>
					    </strong>
			        </font>
                        <div style={{color: 'grey'}}>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font
                                face="Roboto Slab" color="grey" style={{letterSpacing: '0px'}}>Proin iaculis purus consequant sem cure.</font>
                            </p>
                        </div>
			    </p>
                    <img src={Phone} className="img-responsive" style={{float: 'right'}} />

                        <p style={{letterSpacing: '-1px'}} width="76">
                            <font color="black" size="3">
                                <strong><br />
                                    <ion-icon className="fa fa-laptop"
                                        style={{fontSize: '40px', borderRadius: '50%',  border: '2px solid black'}}></ion-icon><a
                                        style={{color: 'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;
                                            <font face="Arial">Secure Encryption
							                </font> <br /></a>
                                </strong>
                            </font>
                            <div style={{color: 'grey'}}>
                                <font face="Roboto Slab" style={{letterSpacing: '0px'}}>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proin iaculis
					                purus consequant sem cure iaculis purus.
                                </font>
                            </div>
                        </p>
                        <br />
                        <p style={{letterSpacing: '-1px'}} width="76">
                            <font face="Roboto Slab" color="black" size="3">
                                <div width="76">
                                    <font face=" Roboto Slab">
                                        <p style={{color: 'grey', letterSpacing: '0em'}}>Proin iaculis purus consequant sem cure digni ssim donnec<br />
								        porttitora entum suscipit aenean rhonus poseure odio in tincidunt.</p>
                                    </font>
                                </div>
                            </font>
			            </p>
		</div>
        <Section2 />
        </div>
    )
}
export default Section1;