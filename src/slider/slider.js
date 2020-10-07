import React, { Components } from 'react';
import P2 from '../Images/P2(a).jpg';
import { Image } from 'react-bootstrap';


import './slider.css';

import ProfessionalServices from '../proServices/proServices';

const Slider = () => {
    return (
        <div>
            <div style={{ width: 'auto' }}>
                <Image
                    style={{ width: '100%', height: '100%' }} responsive
                    src={P2}>
                </Image>
                <p className="p1" style={{
                    fontSize: '4vw',
                    position: 'absolute',
                    top: '70px',
                    left: '35%'
                }}> CREATIVE DIGITAL <br /> SOLUTIONS<br /> </p>
                <div className="p2" style={{
                    fontSize: '1vw',
                    position: 'absolute',
                    top: '35%',
                    left: '44%'
                }}>
                    <p>Proin iaculis purus consequant sem cure.</p>
                </div>
                <div className="CD">
                    <button type="button" className="btn btn-default"
                        style={{
                            border: 'none',
                            backgroundColor: 'lightgreen',
                            color: 'white',
                            borderRadius: '16px',
                            marginTop: '20%'
                        }}>
                        <font face="Arial">VIEW PORTFOLIO</font>
                    </button>
                </div>

                
            </div>
        
        <ProfessionalServices />
            
        </div>


    )
}
export default Slider;