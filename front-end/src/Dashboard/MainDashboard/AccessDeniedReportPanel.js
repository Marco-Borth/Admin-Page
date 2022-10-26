import React from 'react';
import data from "../sample-data/access-denied.json";
import { PanelSizer } from '../../Reusables/Elements.js';

export class AccessDeniedReportPanel extends React.Component {
    render(){
        return(
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title float-left" data-card-widget="collapse">Access Denied: Last 24hrs</h5> 
                            <PanelSizer/>
                        </div>
                        <div class="card-body">
                            <div class="card-body table-responsive p-0">
                                <table id='table_access_denied' class="table table-head-fixed text-nowrap">
                                    <TableHeader/>
                                    <tbody>
                                        {data.map ( ( data ) => {
                                                    return (
                                                        <TableRow Keyholder={data.Keyholder} Door={data.Door} Date={data.Date} 
                                                        Areas={data.Areas}  Situation={data.Situation} Reason={data.Reason}/>
                                                    )
                                                }
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

function TableHeader() {
    return(
        <thead>
            <tr>
                <th>Keyholder</th>
                <th>Door</th>
                <th>Time</th>
                <th>Situation</th>
                <th>Reason</th>
            </tr>
        </thead>
    );
}

function TableRow(props) {
    var Keyholder = "Unknown";
    var Situation = "Threat";
    var Reason = "Unknown Key";

    if(props.Keyholder != null) {
        Keyholder = props.Keyholder;
    }

    if(props.Situation != null) {
        Situation = props.Situation;
    }

    if(props.Reason === "Unauthorized"){
        Reason = "Not a member of an access group for this area/situation";
    } else if(props.Reason != null) {
        Reason = props.Reason;
    }

    return(
        <tr class='cp-unlock-item'>
			<td>{Keyholder}</td>
            <td>{props.Door}</td>					  
            <td>{props.Date}</td>
            <td>{Situation}</td>
            <td>{Reason}</td>
        </tr>
    );
}