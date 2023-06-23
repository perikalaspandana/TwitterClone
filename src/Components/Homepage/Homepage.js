import React from 'react'
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className='homepage'>
    <div className='homepage__top'>
    <div className='homepage__topLeft'>
       <img    src="/images/tweeter.png" alt="twitter home"/>
     </div>

     <div className='homepage__topRight'>
    <img className='logo' width="5%" src="/images/Logo_of_Twitter.svg.png" alt="logo"/>
     <h1 className='homepage__topRight__Title'>Happening now</h1>
     <h2 className='homepage__topRight__Subtitle'>join Twitter today</h2>
     <div className='homepage__topRight__Buttons'>
        <button className='primary__button'>sign up with google</button>
        <button className='primary__button'>sign up with apple</button>
        <button className='secondary__button'>sign up with phone or email</button>
        <p className='homepage__topRight__policies'>
            by signing up,you agree to the <a href="/">Terms of Service</a> and {" "}
            <a href="/">Privacy Policy</a>,including{" "} <a href="/">Cookie Use</a> 
        </p>
     </div>
     <div className='homepage__topRight__Buttons'>
        <h2>Already have an account?</h2>
        <button className='primary__button'>sign in</button>
        
    </div> 
     </div>
     </div>
     <footer className='footer'>
        <ul className='footer__list'>
           
        <li className='footer__list__item'>
            <a href='/'>About</a>  
            </li>

            
            <li className='footer__list__item'>
            <a href='/'>Terms of Service</a>  
            </li>
        

            <li className='footer__list__item'>
            <a href='/'>Privacy Policy</a>  
            </li>

            <li className='footer__list__item'>
            <a href='/'>Cookie Policy</a>  
            </li>

            <li className='footer__list__item'>
            <a href='/'>Accessibility</a>  
            </li>

            <li className='footer__list__item'>
            <a href='/'>Ads Info</a>  
            </li>

            <li className='footer__list__item'>
            <a href='/'>Terms of Service</a>  
            </li>  

            <li className='footer__list__item'>
            <a href='/'>Blog</a>  
            </li>


            <li className='footer__list__item'>
            <a href='/'>Status</a>  
            </li> 
 
           
            <li className='footer__list__item'>
            <a href='/'>Careers</a>  
            </li> 

            <li className='footer__list__item'>
            <a href='/'>Brand Resources</a>  
            </li> 

            <li className='footer__list__item'>
            <a href='/'>Advertising</a>  
            </li> 

            <li className='footer__list__item'>
            <a href='/'>Marketing</a>  
            </li> 
         

            <li className='footer__list__item'>
            <a href='/'>Twitter for Bussiness</a>  
            </li> 



            <li className='footer__list__item'>
            <a href='/'>Developers</a>  
            </li> 



            <li className='footer__list__item'>
            <a href='/'>Directory</a>  
            </li> 

        </ul>
     
      <p className='footer__copyright'>
        {" "}
        <a href='/'>settings</a> 
        <span>&copy;twitter clone</span> 
      </p>
     </footer>
    </div>
    
  );
};

export default Homepage