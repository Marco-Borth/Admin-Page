import React from 'react';

export class NavItem extends React.Component {
    // Model
    constructor(props) {
        super(props);
        // Controller
        this.state = {
            active: !props.active,
            activeClass: "nav-link"
        }
    }

    // Controller
    setActive() {
        if(!this.state.active) {
            this.state.activeClass = "nav-link active";
            this.state.active = true;
        } else {
            this.state.activeClass = "nav-link";
            this.state.active = false;
        }
    }

    // View
    render(){
        return(
            <li class="nav-item">
                <a href={this.props.href} class={"nav-link"}>
                    <div class="nav-icon-align float-left">
                        <i class={this.props.imageClass}></i>
                    </div> {this.props.title} 
                </a>
            </li>
        );
    };
}