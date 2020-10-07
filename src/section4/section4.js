import React from 'react';
import './section4.css';

import C from '../Images/C.PNG';

import Footer from '../footer/footer';


const Section4 =() =>{
    return(
        <div>
            <br/><br/><br/><br/><br/>
		<div class="container-fluid">
			<br/><br/><br/>
			<p className="p1"><b>
					<font face="Arial">READY TO TALK ABOUT YOUR NEXT PROJECT?</font>
				</b></p><br/>
			<button type="button" class="btn btn-default" id="btnn" ><b>
					<font face="Arial">CONTACT US</font>
				</b></button><br/><br/><br/><br/><br/>

		</div>
		<div class="container-fluid">
			<img src={C} class="img-responsive" style={{paddingLeft: '22%',  }} />

		</div>

		<Footer />
        </div>
    )
}
export default Section4;