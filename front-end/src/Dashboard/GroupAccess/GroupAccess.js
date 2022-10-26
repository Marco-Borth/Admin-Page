import React from 'react';
import '../../Reusables/ContentWrapper.css';
import { ContentHeader } from '../../Reusables/ContentHeader.js';
import { GroupAccessTable } from './GroupAccessTable.js';

export class GroupAccess extends React.Component {
    render(){
        return(
            <div class="content-wrapper">
                <ContentHeader 
                    Title="Groups and Access Rights"
                    Breadcrumbs="Home/Groups & Rights"
                    Text="A set of rules that govern when a group of keyholders can gain access to an area."
                />
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <GroupAccessTable/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}