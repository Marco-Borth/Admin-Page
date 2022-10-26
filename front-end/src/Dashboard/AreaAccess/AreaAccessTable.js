import React from 'react';
import data from "../sample-data/area-access.json";
//import TableBody from "../../Reusables/TableBody";

export class AreaAccessTable extends React.Component {
    render(){
        return(
            <div class="card">
                <div>
                    <a href="javascript:void(0)" id="lnkFilterby" class="nav-link active" data-toggle="collapse" 
                        data-target="#divFilter,.navbar-collapse.show" role="button" aria-expanded="false" aria-controls="FilteredBy">
                        Filtered By: 
                    </a> <span id="FilteredBy">None</span>
                </div>
                <div class="card-body table-responsive p-0">
                    <table id="dtEntityList" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
                        <TableHeader/>
                        <tbody>
                            {data.map ( ( data ) => {
                                        return (
                                            <TableRow Name={data.Name} Doors={data.Doors} Groups={data.Groups} interactable={data.Interactable}/>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };
}

function TableHeader() {
    return(
        <thead>
            <tr>
                <th data-priority="1">Name</th>
                <th data-priority="4">Description</th>
                <th data-priority="2">Doors</th>
                <th data-priority="3">Groups</th>
            </tr>
        </thead>
    );
}

// Model
function TableRow(props) {
    //View
    return(
        <tr>
			<td>
                <a href="#" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="cp_mcEntityListPanel cp_mcEntityEditPanel"> 
                    {props.Name}
                </a>
            </td>
			<td>{props.Description}</td>
            <td>
                {props.Doors}
                <Editor interactable={props.interactable}/>
            </td>	
            <td>
                {props.Groups}
                <Editor interactable={props.interactable}/>
            </td>
        </tr>
    );
}

function Editor(props) {
    if(props.interactable === true) {
        return(
            <a title="modify door list" class="float-right">
                <i class="far fa-edit"></i>
            </a>
        );
    }
}