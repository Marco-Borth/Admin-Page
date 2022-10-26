import React, {useState} from "react";
import axios from "axios";

export class HelpDeskPage extends React.Component {
    render(){
        const linkStyle = { "color": "Blue"}
        const panelStyle = {
            "margin-left":"auto",
            "margin-right":"auto",
            "max-width": "500px"
        }

        return(
            <div class="card" style={panelStyle}>
                <article class="card-body">
                    <h1>ACS Common Pass Helpdesk </h1>
                    <h5>
                        Contact ACS Help Desk by emailing question(s) to <a 
                        href="mailto:helpdesk@youracs.org" 
                        style={linkStyle}>helpdesk@youracs.org</a>
                    </h5>
                </article>
            </div>  
        );
    }
}