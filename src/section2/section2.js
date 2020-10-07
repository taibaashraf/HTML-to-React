import React from 'react';
import './section2.css';

import Section3 from '../section3/section3';


const Section2 = () => {
    return (
        <div>
            <div className="div1">
                <p align="center" width="76">
                    <font face="Verdana, Geneva, sans-serif" color="black" size="6">
                        <strong><br />
                            <font face="Arial">CULTURE & VALUES</font>
                        </strong>
                        <br />
                    </font>
                    <div class="p1" >
                        <font face="Roboto Slab">Proin iaculis purus consequant sem cure.</font>
                    </div>
                </p>
                <br /><br />
                <div class="container">
                    <div class="content-wrap">
                        <i class="fa fa-music icon1"></i>
                        <i class="fa fa-signal icon1"></i>
                        <i class="fa fa-star-o icon1"></i>
                    </div>
                </div>

                <div class="container">

                    <table class="table1" style={{textAlign:'center'}} >

                        <thead>
                            <tr>
                                <th class="text-center">
                                    <font face="Arial" color="black" size="3" style={{letterSpacing: '-1px'}}>WORK-LIFE
                                BALANCE</font>
                                </th>
                                <th class="text-center">
                                    <font face="Arial" color="black" size="3" style={{letterSpacing: '-1px'}}>QUALITY
                                OVER QUANTITY</font>
                                </th>
                                <th class="text-center">
                                    <font face="Arial" color="black" size="3" style={{letterSpacing: '-1px'}}>DELIVER
                                EXCELLENCE</font>
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
                    <br />
                    <br />
                    <br />
                </div>

            </div>

            <Section3 />
        </div>
    )
}
export default Section2;