import React, {Component} from 'react';
import { Link } from 'react-router-dom';



//import AboutUs from '../aboutUs/aboutUs';
import leave  from '../Images/P1.PNG';


import Slider from '../slider/slider';
//import AboutUs from '../aboutUs/aboutUs';




class NavBar extends Component {

	constructor(props) {
		super(props);
		this.aboutUs = this.aboutUs.bind(this);
	  }
	
	  aboutUs() {
		// <AboutUs />;
	  }
	  render(){
		return(
			<div>
	
			<nav className="navbar navbar-default navbar-fixed-top" role="navigation" align="center"
				style={{height:'10%' , backgroundColor: 'white'}}>
				<div className="container">
		
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
							data-target="#loso-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<div id="container">
	
							<div id="image" style={{float:'left'}}>
								<img className="img-responsive" src={leave} align="left" />
							</div>
	
							<div id="texts" style={{float:'left'}}>
								<a className="navbar-brand" href="#TREEHOUSE" id="bk">
									<b size="2">
										<font face="Arial">TREEHOUSE</font>
									</b>
								</a>
							</div>
						</div>
	
					</div>
					
					<div className="collapse navbar-collapse" id="loso-navbar-collapse-1">
						<ul className="nav navbar-nav navbar-right">
							<li><a href="#HOME" className="nav-item"><b>
										<font face="Arial" size="2"  style={{ color:'#777777'}}>HOME</font>
									</b></a></li>
							<li><a href="#ABOUT" className="nav-item"><b>
										<font face="Arial" size="2" ><Link to="/about" style={{color:'#777777', textDecoration:'none'}}>ABOUT</Link></font>
									</b></a></li>	
							<li><a href="#BLOG" className="nav-item"><b>
										<font face="Arial" size="2"><Link to="/blog" style={{color:'#777777', textDecoration:'none'}}>BLOG</Link></font>
									</b></a></li>
							<li><a href="#PORTFOLIO" className="nav-item"><b>
										<font face="Arial" size="2"><Link to="/portfolio" style={{color:'#777777', textDecoration:'none'}}>PORTFOLIO</Link></font>
									</b></a></li>
							<li><a href="#CONTACT" className="nav-item"><b>
										<font face="Arial" size="2"><Link to="/contact" style={{color:'#777777', textDecoration:'none'}}>CONTACT</Link></font>
									</b></a></li>
						</ul>
					</div> 
				</div>
			</nav>
	
		   <Slider />
	
			</div>
		)
	  }
    

}

    
        
    

export default NavBar;