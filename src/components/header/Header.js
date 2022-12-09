import React from 'react'
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'tachyons'
import logo from '../../pic/logo.png'

const Header = () => {
  return (
    <div>
      <header class="bg-white black-80 tc avenir">
        <img src={logo} alt="" className="h3"/>
        <nav class="bt bb tc mw7 center mt4">
          <a class="f6 f5-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" href="/">Home</a>
          <a class="f6 f5-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" href="/about">About</a>
          <a class="f6 f5-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" href="/signin">Login</a>
          <a class="f6 f5-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" href="/signup">Register</a>
          <a class="f6 f5-l link bg-animate black-80 hover-bg-light-gray dib pa3 ph4-l" href="/admin">Admin</a>
        </nav>
      </header>
    </div>
  )
}

export default Header