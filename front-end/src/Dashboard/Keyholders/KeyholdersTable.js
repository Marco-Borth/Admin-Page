import React from 'react';

export class KeyholdersTable extends React.Component {
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
                            <TableRow Surname="Aguilar"  Firstname="Antonio" Status = "Active"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Name="Aguilar, Marcos Antonio" Status = "Active" Keys = "4" Masterkeys = "2"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Name="Ahr, Cheryl" Status = "Active" Keys = "2"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Name="Alaniz, Alexandra" Status = "Active" Keys = "2"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Name="Alaniz, Maria H." Status = "Active" Keys = "2"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Name="Alejandro, Ernesto" Status = "Active"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Name="Allen, Bob" Status = "Active" Keys = "4" Masterkeys = "2"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Surname="Allen" Firstname="Regina" Status = "Active" Keys = "2"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Surname="Alvarado" Firstname="Aurora" Status = "Active" Keys = "2"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
                            <TableRow Name="Alvarez, Diana" Status = "Active" Keys = "3" Masterkeys = "1"
                            Phone="(806) 555-1212" Email="mymail@bluebonnetcounty.gov" Dept="Annex"/>
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
                <th>Name</th>
                <th>Status</th>
                <th>Key</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Dept</th>
            </tr>
        </thead>
    );
}

function TableRow(props) {
    var Fullname, Key;
    var Status = "Inactive";

    if(props.Name == null && props.Firstname != null & props.Surname != null) {
        if (props.Middlename == null) {
            Fullname = props.Surname +", " + props.Firstname;
        } else {
            Fullname = props.Surname +", " + props.Firstname + " " + props.Middlename;
        }
    } else {
        Fullname = props.Name;
    }

    if(props.Status != null) {
        Status = props.Status;
    }

    if(props.Keys != null) {
        if(props.Masterkeys != null) {
            var normalKeys = props.Keys - props.Masterkeys;
            Key = normalKeys + " Normal, " + props.Masterkeys + " Master";
        } else {
            Key = props.Keys + " Normal";
        }
    }

    return(
        <tr>
			<td> {Fullname} </td>
			<td> {Status} </td>
            <td> {Key} </td>
            <td> {props.Phone} </td>
            <td> {props.Email} </td>
            <td> {props.Dept} </td>
        </tr>
    );
}

function Editor(props) {
    if(props.interactable === "true") {
        return(
            <a title="modify door list" class="float-right">
                <i class="far fa-edit"></i>
            </a>
        );
    }
}