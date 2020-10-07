import React, { Components } from 'react';

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import { Image } from 'react-bootstrap';

import Setting from '../Images/setting.PNG';
import Sea from '../Images/sea.PNG';

import Section1 from '../section1/section1';


const Section = () => {
	return (
		<div>

			<MDBContainer className="mt-5">
				<MDBRow className="mb-4">
					<MDBCol md="5">
						<img src={Setting} className="img-fluid" alt="" width='107%' height='0%' />
					</MDBCol>
					<MDBCol md="4">
						<img src={Sea} className="img-fluid" alt="" width='210%' height='460px' />
						<div className="" style={{
							position: 'absolute',
							left: '10%',
							right: '0',
							top: '15%'
						}}>
							<p style={{ fontSize: '200%' }} className="text">
								<font face="Arial" color="white"><b>JUST RELAX <b style={{ color: 'lightgreen' }}>&</b>
									<br />
									LET US DO THE HEAVY LIFTING</b></font>
							</p>
							<div style={{ color: 'grey' }}>
								<font face="Roboto Slab">Proin iaculis purus consequant sem cure digni ssim<br />donnec
								porttitora entum suscipit aenean rhonus poseure<br />odio in tincidunt.</font>
							</div> <br />
							<ul style={{ color: 'grey' }}>
								<li className="fa fa-check">
									<font face="Roboto Slab">Initial Setup & Customizations</font>
								</li><br />
								<li className="fa fa-check">
									<font face="Roboto Slab">Regular Updates</font>
								</li><br />
								<li className="fa fa-check">
									<font face="Roboto Slab">Round The Clock Support</font>
								</li><br />

							</ul>
							<br /><br />
							<button type="button" className="btn btn-default"
								style={{
									borderRadius: '10px',
									backgroundColor: 'lightgreen',
									color: 'white'
								}}>
								<b>
									<font face="Arial">LEARN MORE</font>
								</b></button>
						</div>

					</MDBCol>
				</MDBRow>
			</MDBContainer>


		<Section1 />
		</div>
	)
}
export default Section;