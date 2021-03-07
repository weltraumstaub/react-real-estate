import React, { Component} from 'react'
 

export default class Header extends Component {
  
  render () {
    return (<header>
      <div className="logo">Logo</div>
      <nav> 
        <a href="#">Create Advertisements</a>
        <a href="#">Learn About Us</a>
        <a href="#">Log In</a>
        <a href="#" className="register-button">Register</a>
      </nav>
    </header>)
  }
}


