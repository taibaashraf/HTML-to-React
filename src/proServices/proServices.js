import React, { Components } from 'react';
import Section from '../section/section';

const ProfessionalServices = () =>{
    return(
        <div>
            
            <p align="center" width="76" id="PS">
			<font color="black" size="6">
				<strong><br />
					<font face="Arial">PROFESSIONAL SERVICES</font>
				</strong>
				<br />
			</font>
		<div style={{letterSpacing: '0em', color: 'grey',textAlign: 'center'}}>
			<font face="Roboto Slab">Proin iaculis purus consequant sem cure.</font>
		</div>
		</p>
		<br /><br />
		<div className="container">		

			<div className="row" style={{textAlign: 'center'}}>
				<div className="column">
					<p className="fa fa-heart-o" style={{fontSize: '40px'}}></p>
				</div>
				<div className="column">
					<p className="fa fa-tablet" style={{fontSize: '40px'}}></p>
				</div>
				<div className="column">
					<p className="fa fa-bolt" style={{fontSize: '40px'}}></p>
				</div>
			</div>



			<table className="" style={{textAlign: 'center'}}>

				<thead>
					<tr>
						<th className="text-center">
							<font face="Arial" color="black" size="3" style={{letterSpacing: '-1px'}}>BEAUTIFUL
								DESIGNS</font>
						</th>
						<th className="text-center">
							<font face="Arial" color="black" size="3" style={{letterSpacing: '-1px'}}>RESPONSIVE WEB
							</font>
						</th>
						<th className="text-center">
							<font face="Arial" color="black" size="3" style={{letterSpacing: '-1px'}}>MARKETING
								TOOLS</font>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr style={{color: 'grey'}}>
						<td>
							<font face="Roboto Slab">Proin iaculis purus consequant sem cure digni ssim. Donecc
								porttitora entum suscipit aenean rhoncus posuera odio in tincidunt.</font>
						</td>
						<td>
							<font face="Roboto Slab">Proin iaculis purus consequant sem cure digni ssim. Donecc
								porttitora entum suscipit aenean rhoncus posuera odio in tincidunt.</font>
						</td>
						<td>
							<font face="Roboto Slab">Proin iaculis purus consequant sem cure digni ssim. Donecc
								porttitora entum suscipit aenean rhoncus posuera odio in tincidunt.</font>
						</td>
					</tr>
				</tbody>


			</table>

		</div>

		<Section />
        </div>
    )


}
export default ProfessionalServices;