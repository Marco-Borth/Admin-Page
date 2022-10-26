import React from 'react';
import { Navbar } from './Navigation/Navbar.js'
import { UserMenu } from './Navigation/UserMenu.js'
import { MainDashboard } from './MainDashboard/MainDashboard.js';
import { Keyholders } from './Keyholders/Keyholders.js';
import { GroupAccess } from './GroupAccess/GroupAccess.js';
import { AreaAccess } from './AreaAccess/AreaAccess.js';
import { ControlSidebar } from './Navigation/ControlSidebar.js';

export class CPAdmin extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      showNavbar: true,
      showControlPanel: false,
      isMobile: props.isMobile
    }
  }

  render() {
    return(
      <div class="cp-admin">
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          {this.GlobalMenu()}
          <UserMenu/>
        </nav>
        {this.ToggleNavbar()}
        {this.ToggleControlPanel()}
        {RenderPage()}
      </div>
    )
  }
  
  GlobalMenu() {
    return(
      <ul class="navbar-nav">
          <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" role="button" onClick={this.handleNavbar}><i class="fas fa-bars"></i></a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
              <a href="dashboard" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
              <a class="nav-link" data-widget="control-sidebar" data-slide="true" role="button" onClick={this.handleControlPanel}>
                  <i class="fas fa-binoculars"></i>
                  <span class="d-none d-md-inline">Bluebonnet County</span>
              </a>
          </li>
      </ul>
    );
  }

  handleNavbar = () => {
    if (this.state.isMobile) {
      this.setState({ showControlPanel: !(this.state.showControlPanel) });
    }

    this.setState({ showNavbar: !(this.state.showNavbar) });
  }

  handleControlPanel = () => {
    if (this.state.isMobile) {
      this.setState({ showNavbar: !(this.state.showNavbar) });
    }

    this.setState({ showControlPanel: !(this.state.showControlPanel) });
  }

  ToggleNavbar() {
    if(this.state.showNavbar) {
      return(<Navbar/>);
    }
    return(null);
  }

  ToggleControlPanel() {
    if(this.state.showControlPanel) {
      return(<ControlSidebar/>);
    }
    return(null);
  }
}

function RenderPage(){
  var p = window.location.href.split('/');
  if (p.length > 0) {
    var nav = p[p.length - 1];

    switch (nav) {
      case "/":
      case "":
      case "home":
        return (<HomePage/>);

      case "dashboard":
        return (<MainDashboard/>);

      case "people":
        return (<Keyholders/>);

      case "group_access":
        return (<GroupAccess/>);

      case "area_access":
        return (<AreaAccess/>);

      default:
        return (null);
    }
  }
  return(null);
}

function HomePage() {
  return(
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <div class="col-sm-auto">
                <div class="card">
                    <div class="card-header">
                        <h1 class="m-0">Welcome, [user]</h1>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}