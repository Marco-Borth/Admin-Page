import React from 'react';
import '../../Reusables/ContentWrapper.css';
import { ContentHeader } from '../../Reusables/ContentHeader.js';
import { AreaAccessTable } from './AreaAccessTable.js';

var text = "Each Area represents a collection of doors that should have the same access rules and restrictions;"
text = text +"\nWhen a keyholder can open a door in this Area."
export class AreaAccess extends React.Component {
    render(){
        return(
            <div class="content-wrapper">
                <ContentHeader 
                    Title="Access Areas"
                    Breadcrumbs="Home/Areas/Access Area"
                    Text= {text}
                />
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <AreaAccessTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}