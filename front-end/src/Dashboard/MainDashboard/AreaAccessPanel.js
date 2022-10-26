import React from 'react';
import data from "../sample-data/unlock-areas.json";
import { PanelSizer, TitleHyperlink } from '../../Reusables/Elements.js';

export class AreaAccessPanel extends React.Component {
    render(){
        return(
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title float-left" data-card-widget="collapse">									
                                Unlock Areas: 22
                            </h5>
                            <div class="card-tools float-right">
                                <button id='unlock_tool_unlock' type="button" class="btn btn-tool" title="Lock Selected Area(s)" data-widget="chat-pane-toggle">
                                    <i class="fas fa-lock fa-lg"></i>
                                </button>			  
                                <button type="button" class="btn btn-tool" title="Unlock Selected Area(s)" data-widget="chat-pane-toggle">
                                    <i class="fas fa-unlock fa-lg"></i>
                                </button>
                                <button id='unlock_tool_schedule' type="button" class="btn btn-tool" title="Change Selected Area's Schedule" data-widget="chat-pane-toggle">
                                    <i class="fa-solid fa-calendar-days fa-lg"></i>
                                </button>
                                <PanelSizer/>
                            </div>

                            <div class="col-sm-10 col-lg-4">
                                <span class="ml-4 d-none d-lg-inline">&nbsp;</span>
                                <span>(
                                    <a href="#">Locked: 12</a>;
                                    &nbsp;&nbsp;
                                    <a href="#">Unlocked: 10</a>
                                )</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="card-body table-responsive p-0">
                                <table id='table_area_unlock' class="table table-head-fixed text-nowrap">
                                    <TableHeader/>
                                    <tbody>
                                        {data.map ( ( data ) => {
                                                    return (
                                                        <TableRow href={data.href} area={data.area} status={data.status} situationDate={data.situationDate} 
                                                        scheduledChangeDate={data.scheduledChangeDate}  scheduledStatus={data.scheduledStatus}/>
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
                <th data-priority="0"></th>
                <th data-priority="1">Area</th>
                <th data-priority="2">State</th>
                <th data-priority="3">Situation</th>					  
                <th data-priority="4">Last changed</th>
                <th data-priority="5">Next change</th>				
                <th data-priority="6">Unlock On</th>
            </tr>
        </thead>
    );
}

function TableRow(props) {
    i += 1;
    var rowId = tableRowId + i;
    var status = "Locked";
    var situation = "Normal";

    if(props.status != null) {
        status = props.status;
    }

    if(props.situation != null) {
        situation = props.situation;
    }

    /*
    const mystyle = {
        vertical-allign: "middle",
      };
    */

    return(
        <tr class='cp-unlock-item'>
            <td class="tselector">
                <div class="custom-control custom-checkbox checkbox-lg" id="unlockAreaRowBox">
                    <input type="checkbox" class="custom-control-input" id={rowId}/>
					<label class="custom-control-label" for={rowId}></label>
                </div>
            </td>
			<TitleHyperlink href={props.href} title={props.area}/>
            <td>{status}</td>
            <td>{situation}</td>					  
            <td>{props.situationDate}</td>
            <td>{props.scheduledChangeDate}</td>							  
            <td>{props.scheduledStatus}</td>
        </tr>
    );
}

var tableRowId = "tau";
var i = 0;