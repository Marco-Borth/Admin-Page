import React from 'react';
//import LogoImage from './CPLOGO1.png';
import './Navbar.css';
import { NavItem } from './NavItem.js'

export class Navbar extends React.Component {
    // Main Sidebar Container
    render(){
        return(
            <aside class="main-sidebar">
                <div class="sidebar">
                    <nav class="mt-0">
                        <ul class="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">                       
                            <NavItem href="./dashboard" imageClass="far fa-tachometer-alt" title="Dashboard"/>
                            <AccessControlPanel/>
                            <SetupPanel/>
                            <SystemSettingsPanel/>
                            <AdvancedSettingsPanel/>
                            <li class="nav-item"><p>&nbsp;</p></li>
                            <li class="nav-item"></li>
                        </ul>
                    </nav>
                </div>
            </aside> 
        );
    };
}

class AccessControlPanel extends React.Component {
    render(){
        return(
            <div class="AccessControlPanel">
                <li class="nav-header">Access Control</li>
                <NavItem href="./people" imageClass="far fa-id-badge" title="Keyholders"/>
                <NavItem href="./group_access" imageClass="far fa-object-group" title="Groups and Access"/>
            </div>
        );
    };
}

class SetupPanel extends React.Component {
    render(){
        return(
            <div class="SetupPanel">
                <li class="nav-header">Setup</li>
                <NavItem href="./area_access" imageClass="far fa-building" title="Access Areas"/>
                <NavItem href="./area_unlock" imageClass="far fa-door-open" title="Unlock Areas"/>
                <NavItem href="./schedule" imageClass="far fa-calendar-alt" title="Schedules"/>
                <NavItem href="./kioskSetup" imageClass="far fa-calendar-alt" title="Kiosk / Mobile Opener"/>
            </div>
        );
    };
}

class SystemSettingsPanel extends React.Component {
    render(){
        return(
            <div class="SystemSettingsPanel">
                <li class="nav-header">System Settings</li>
                <NavItem href="./group_access" imageClass="far fa-user-cog" title="Users"/>
                <NavItem href="./group_access" imageClass="far fa-surprise" title="Situations"/>
                <NavItem href="./group_access" imageClass="far fa-list-ul" title="Partitions"/>
            </div>
        );
    };
}

class ReportingPanel extends React.Component {
    // **TO-DO** Need to add Attendance to Tree-View Component.
    render(){
        return(
            <li class="nav-item">
                <a href="#" class="nav-link">
                    <i class="nav-icon fas fa-edit float-left"></i> <p>
                        Reporting <i class="fas fa-angle-left right"></i>
                    </p>
                </a>
                <NavItem href="../forms/general" imageClass="far fa-user-check" title="Attendence"/>
            </li>
        );
    };
}

class AdvancedSettingsPanel extends React.Component {
    render(){
        return(
            <div class="AdvancedSettingsPanel">
                <li class="nav-header">Advanced</li>
                <NavItem href="./group_access" imageClass="far fa-clipboard-check" title="Audit Log"/>
                <NavItem href="./group_access" imageClass="far fa-mobile-alt" title="Device List"/>
                <NavItem href="./area_situation" imageClass="far fa-meteor" title="Situation Areas"/>
                <NavItem href="./area_intrusion" imageClass="far fa-user-secret" title="Intrusion Zones"/>
            </div>
        );
    };
}