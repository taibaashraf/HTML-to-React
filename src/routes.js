import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './navBar/navbar';
import Slider from './slider/slider';
import ProfessionalServices from './proServices/proServices';
import Section from './section/section';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Footer from './footer/footer';








import AboutUs from './aboutUs/aboutUs';
import ContactUs from './contact/contact';
import Blog from './blog/blog';
import Portfolio from './portfolio/portfolio';


class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
            <Switch>
                    <Route path="/" exact component={NavBar} />
                    {/* <Route path="/" exact component={Slider} />
                    <Route path="/" exact component={ProfessionalServices} />
                    <Route path="/" exact component={Section} />
                    <Route path="/" exact component={Section1} />
                    <Route path="/" exact component={Section2} />
                    <Route path="/" exact component={Section3} />
                    <Route path="/" exact component={Section4} />
                    <Route path="/" exact component={Footer} /> */}

                    <Route path="/about"  component={AboutUs} />
                    <Route path="/contact"  component={ContactUs} />
                    <Route path="/blog"  component={Blog} />
                    <Route path="/portfolio"  component={Portfolio} />
                </Switch>
            </BrowserRouter>
                
            
        )
    }
}
export default Routes;