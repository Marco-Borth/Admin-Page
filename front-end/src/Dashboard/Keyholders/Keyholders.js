import React from 'react';
import '../../Reusables/ContentWrapper.css';
import { ContentHeader } from '../../Reusables/ContentHeader.js';
import { KeyholdersTable } from './KeyholdersTable.js';
//import ContentHeader from "../../ContentHeader";

var text = "A Keyholder is an individual with one or more key cards."
text = text +"\nEach key card assigned will provide the system with the identification of the individual attempting to access a secure area or changing a situation."

export class Keyholders extends React.Component {
    render(){
        return(
            <div class="content-wrapper">
                <ContentHeader 
                    Title="Keyholders"
                    Breadcrumbs="Home/Keyholders"
                    Text= {text} 
                />
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <KeyholdersTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}