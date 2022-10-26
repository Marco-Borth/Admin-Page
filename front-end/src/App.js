import React from 'react';
//import $ from "jquery";
import './css/App.css';
//import './css/custom.css';
import './css/cpadmin.css';
import { CPAdmin } from './Dashboard/CPAdmin.js';
import { LoginPage } from './Login/LoginPage.js';
import { PasswordResetPage } from './Login/FindUser.js';
import { HelpDeskPage } from './Login/HelpDesk';
import { VerifyCodePanel } from './Login/VerifyCode.js';
import { ChangePWPanel } from './Login/ChangePW.js';
import { Footer } from './Reusables/Elements';

function App() {
  return (
    <div className="App">
      {HandleLogin()}
      <Footer/>
    </div>
  );
}

function HandleLogin() {
  var p = window.location.href.split('/');
  if (p.length > 0) {
    var nav = p[p.length - 1];

    switch (nav) {
      case "/":
      case "":
      case "login":
        return (<LoginPage/>);

      case "forgot":
        return (<PasswordResetPage/>);

      case "help":
        return (<HelpDeskPage/>);

      case "verify":
        return (<VerifyCodePanel/>);

      case "change-pw":
        return (<ChangePWPanel/>);

      default:
        var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

        return (<CPAdmin isMobile={isMobile}/>);
    }
  }
  return (<CPAdmin />);
}

export default App;