import React from 'react';
import { TitleHyperlink } from '../../Reusables/Elements.js';

export class AreaAccessStatsPanel extends React.Component {
    render(){
        return(
            <div class="row">
                <KeyholdersPanel/>
                <AccessGroupsPanel/>
                <DevicesPanel/>
            </div>
        );
    };
}

class KeyholdersPanel extends React.Component {
    render(){
        return(
            <div class="col-sm-auto">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-0">Keyholders: 341</h5>
                    </div>
                    <div class="card-body">
                        <div class="card-body table-responsive p-0">
                            <table class="table text-nowrap">
                                <TableRow href="people?f=nokey" title="Without Key" value="2"/>
                                <TableRow href="people?f=nogroup" title="Not in Group" value="1"/>
                                <TableRow href="people?f=sus" title="Suspended" value="3"/>
                                <TableRow title="Master Cards" value="5"/>
                                <TableRow title="Kiosk Opener (MDO)" value="4"/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

class AccessGroupsPanel extends React.Component {
    render(){
        return(
            <div class="col-sm-auto">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-0">Access Groups: 20</h5>
                    </div>
                    <div class="card-body">
                        <div class="card-body table-responsive p-0">
                            <table class="table text-nowrap">
                                <TableRow title="Without Members" value="2"/>
                                <TableRow title="Without Area/Schedule" value="5"/>
                                <TableRow title="Suspended" value="1"/>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

class DevicesPanel extends React.Component {
    render(){
        return(
            <div class="col-sm-auto">
                <div class="card">
                    <div class="card-header">
                        <h5 class="m-0">Devices: 510</h5>
                    </div>
                    <div class="card-body">
                        <div class="card-body table-responsive p-0">
                            <table class="table text-nowrap">
                                <TableRow title="Not Connected" value="5"/>
                                <TableRow title="Disabled" value="6"/>
                                <TableRow title="Ajar" value="10"/>
                                <TableRow title="Not Configured" value="4"/>        
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

function TableRow(props) {
    return(
        <tr>
            <TitleHyperlink href={props.href} title={props.title}/>
            <td>{props.value}</td>
        </tr>
    );
}