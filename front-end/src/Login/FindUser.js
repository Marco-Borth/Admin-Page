import React, {useState} from "react";
import axios from "axios";
import { HelpDeskURL } from "../Reusables/Elements";

var text = "Enter either your email address or mobile number"
text = text + " to receive a security code.";

export class PasswordResetPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clickerCount: 0,
            random_code: null,
            usernameQuery: "",
            phoneNumberQuery: "",
            match: null,
        }
    }

    render() {
        const panelStyle = {
            "margin-left":"auto",
            "margin-right":"auto",
            "max-width": "500px"
        }

        return(
            <div class="forgot-pw-page" style={panelStyle}>
                {this.ResetPanel()}
                {this.MatchPanel()}
            </div>
        );
    }

    MatchPanel() {
        var match = this.state.match;
        const CodeStyle = { "color": "Blue"}

        if(match) {
            var code1 = this.state.random_code.substring(0, 3);
            var code2 = this.state.random_code.substring(3, this.state.random_code);

            return(
                <div class="card">
                    <article class="card-body">
                        <h5>Match Found</h5>
                        <p>Here is your auth-code:</p>
                        <h1 style={CodeStyle}>
                            {code1} {code2}
                        </h1>
                    </article>
                </div>
            )
        }
    }

    ResetPanel() {
        return(
            <div class="card">
                <article class="card-body">
                    <h1> <i class="fa fa-lock fa-2x"/> </h1><br/>
                    <h3> Forgot Password? </h3>
                    <p> {text} </p>

                    <div class="findUser-form">
                        {this.usernameField()}
                        <br/>

                        {this.phoneNumberField()}
                        <p>(note: standard text rates may apply)</p>

                        {this.getCodeButton()}
                        {this.ReportError()}
                    </div>
                </article>
            </div>
        )
    }

    usernameField() {
        return(
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class={"bi bi-envelope-fill"}/></span>
                </div>
                <input name="" class="form-control" placeholder={"email address"} type={"string"}
                onChange={(e) => this.setState({ usernameQuery: e.target.value })}
                /><br/>
            </div>
        )
    }

    phoneNumberField() {
        return(
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class={"bi bi-music-player-fill"}/></span>
                </div>
                <input name="" class="form-control" placeholder={"phone number"} type={"string"}
                onChange={(e) => this.setState({ phoneNumberQuery: e.target.value })}
                />
            </div>
        )
    }

    getCodeButton() {
        return(
            <div class="form-group">
                <button 
                    class="btn btn-lg btn-primary btn-block" 
                    type="submit" onClick={this.handleClick}
                > Get Code </button>
                {this.helpRequired()}
            </div>
        )
    }

    handleClick = () => {
        var userName = this.state.usernameQuery;
        var phone_number = this.state.phoneNumberQuery;

        axios.post(
            "https://stage3.i-info.com/cpserver/Auth/api/forgot",  
            { email: userName, phone: phone_number}
        ).then(response => {
            if(response.data.statusCode === 404) {
                this.setState({ 
                    match: false, 
                    random_code: null,
                    clickerCount: this.state.clickerCount += 1 
                });
            } else if(response.data.code != null) {
                this.setState({ 
                    match: true, 
                    random_code: response.data.code,
                    clickerCount: 0 
                });
            }
        })
    }

    helpRequired() {
        if(this.state.clickerCount >= 3) 
            return(<HelpDeskURL/>);
    }

    ReportError() {
        var match = this.state.match;

        if(!match) {
            const textStyle = { "color": "Red"}
            return(<p style={textStyle}>Error! No match can be found for the information entered.</p>)
        } else {
            return(null)
        }
    }
}