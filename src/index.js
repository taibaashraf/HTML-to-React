import React from 'react';
import ReactDOM from 'react-dom';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css'

import { BrowserRouter, Route,Link, NavLink, Switch } from 'react-router-dom';

import Routes from './routes';


//COMPONENTS
import NavBar from './navBar/navbar';
import Slider from './slider/slider';
import ProfessionalServices from './proServices/proServices';
import Section from './section/section';
import Section1 from './section1/section1';
import Section2 from './section2/section2';
import Section3 from './section3/section3';
import Section4 from './section4/section4';
import Footer from './footer/footer';

const App = () =>{
    return(

      <BrowserRouter>
        <Routes />
      
      </BrowserRouter>

      // <BrowserRouter>
      // <div>
      //   <Switch>
      //   <Route path="/" component={NavBar} />
      //     <Route path="/" component={Slider} />
      //     <Route path="/" component={ProfessionalServices} />
      //     <Route path="/" component={Section} />         
      //     <Route path="/" component={Section1} />
      //     <Route path="/" component={Section2} />
      //     <Route path="/" component={Section3} />
      //     <Route path="/" component={Section4} />
      //     <Route path="/" component={Footer} />
      //   </Switch>
      // </div>

      // </BrowserRouter>







      // <div>
      //   {/* <NavBar /> */}
      //   {/* <Slider/> */}
      //   {/* <ProfessionalServices /> */}
      //   {/* <Section /> */}
      //   {/* <Section1 /> */}
      //   {/* <Section2 /> */}
      //   {/* <Section3 /> */}
      //   {/* <Section4 /> */}
      //   <Footer />

      // </div>
    )

}




ReactDOM.render( <App />, document.getElementById('root'));


