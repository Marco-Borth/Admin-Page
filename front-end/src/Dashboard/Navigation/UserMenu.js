import React from 'react';

export class UserMenu extends React.Component {
    // Right navbar links
    render(){
        return(
            <ul class="navbar-nav ml-auto">
                <NavBarSearch/>
                <MessagesPanel/>
                <NotificationBell/>
                <SidebarController/>
                <NotificationExpander/>
                <Avatar/>
            </ul>
        );
    };
}

class NavBarSearch extends React.Component {
    // Navbar Search
    render(){
        return(
            <li class="nav-item">
                <div class="navbar-search-block">
                    <form class="form-inline">
                        <div class="input-group input-group-sm">
                            <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"></input>
                            <div class="input-group-append">
                                <button class="btn btn-navbar" type="submit">
                                    <i class="fas fa-search"></i>
                                </button>
                                <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                    <i class="fas fa-times"></i>
                                </button>   
                            </div>
                        </div>
                    </form>
                </div>
            </li>
        );
    };
}

class MessagesPanel extends React.Component {
    // Messages Dropdown Menu
    render(){
        return(
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="fas fa-heartbeat"></i>
                    <span class="badge badge-danger navbar-badge">3</span>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <a href="#" class="dropdown-item">
                            <Message/>
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </a>
            </li>
        );
    };
}

class Message extends React.Component {
    render(){
        return(
            <div class="media">
                <div class="media-body">
                    <h3 class="dropdown-item-title">
                        48 of 60 devices not connected
                    </h3>
                </div>
            </div>
        );
    };
}

class NotificationBell extends React.Component {
    render(){
        return(
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="far fa-bell"></i>
                    <span class="badge badge-warning navbar-badge">15</span>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span class="dropdown-header">15 Notifications</span>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-envelope mr-2"></i> 4 new messages
                        <span class="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-users mr-2"></i> 8 friend requests
                        <span class="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item">
                        <i class="fas fa-file mr-2"></i> 3 new reports
                        <span class="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                </div>
            </li>
        );
    };
}

class NotificationExpander extends React.Component {
    render(){
        return(
            <li class="nav-item">
                <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i class="fas fa-expand-arrows-alt"></i>
                </a>
            </li>
        );
    };
}

class SidebarController extends React.Component {
    render(){
        return(
            <li class="nav-item">
                <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                    <i class="fas fa-th-large"></i>
                </a>
            </li>
        );
    };
}

class Avatar extends React.Component {
    render(){
        return(
            <li class="nav-item dropdown">
                <a class="nav-link" data-toggle="dropdown" href="#">
                    <i class="fas fa-user-circle"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span class="dropdown-header">
                        <div>Tim Smith</div>
                        <div>tsmith@southtx.org</div>
                    </span>
                    <div class="dropdown-divider"></div>
                    <a href="./home" class="dropdown-item">
                        <i class="far fa-user-circle"></i> Profile
                    </a>
                    <a href="./login" class="dropdown-item">
                        <i class="fas fa-sign-out-alt"></i> Signout
                    </a>
                </div>
            </li>
        );
    };
}