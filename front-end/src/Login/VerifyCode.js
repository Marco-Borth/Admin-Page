import React, {useState} from "react";
import axios from "axios";
import { HelpDeskURL } from "../Reusables/Elements";

var text = "We sent you a verification code to your email."
text = text +" Check your spam folder if no email has been sent in the past 5 minutes."

export class VerifyCodePanel extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          seconds: 0
        }
    }

    render() {
        const panelStyle = {
            "margin-left":"auto",
            "margin-right":"auto",
            "max-width": "500px"
        }

        return(
            <div class="card" style={panelStyle}>
                <article class="card-body">
                    <h1> Verify that it's you </h1><br/>
                    <p> {text} </p>

                    <div class="findUser-form">
                        <p class ="float-left">Verification Code:</p>
                        {this.VerifyCodeField()} <br/>
                        {this.Countdown()}
                        {this.VerifyButton()}
                    </div>
                </article>
            </div>
        )
    }

    VerifyCodeField() {
        return(
          <div class="input-group">
            <input name="" class="form-control" type="number"
              onChange={(e) => this.setState({ usernameQuery: e.target.value })}
            />
          </div>
        )
    }

    Countdown() {
        var countdownText = "Didn't get the code?"; 

        if(this.state.seconds === 0) {
            countdownText += " Try again now."
        } else {
            countdownText += " Try again in " + this.state.seconds + " secs."
        }

        return(<p class="float-left"> {countdownText} </p>)
    }

    VerifyButton() {
        const linkStyle = { "color": "Blue"}
    
        return(
          <div class="Submit-Button">
              <button type="submit" class="btn btn-primary btn-block" onClick={this.handleClick}> Verify and Sign In </button><br/>
              <HelpDeskURL/>
          </div>
        );
    }

    handleClick = () => {
        var currentDate = new Date().getTime()
        var nextDate = currentDate + 30

        this.setState({ seconds: nextDate - currentDate})
    }
}