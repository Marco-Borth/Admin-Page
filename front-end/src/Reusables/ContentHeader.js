import React, {useState} from "react";
import axios from "axios";

export function ContentHeader(props) {
    return (
        <div class="content-header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-6">
                        <h2 class="float-left">
                            {props.Title}
                            <button id='general_tool_new' type="button" class="btn btn-tool" title="New Access Area">
                                <i class="fa-solid fa-file-circle-plus"></i>		
                            </button>
                        </h2>
                    </div>
                    <Breadcrumbs Breadcrumbs = {props.Breadcrumbs}/>
                </div>

                <div class="row">
                    <div class="col-sm-6 float-left">
                        <span class="m-0 dx-text-content-alignment-left">
                            {props.Text}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Breadcrumbs(props){
    var indexes = props.Breadcrumbs.split("/");

    if(indexes.length == 2) {
        return(
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">{indexes[0]}</a></li>
                    <li class="breadcrumb-item">{indexes[1]}</li>
                </ol>
            </div>
        );
    } else {
        return(
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">{indexes[0]}</a></li>
                    <li class="breadcrumb-item"><a href="#">{indexes[1]}</a></li>
                    <li class="breadcrumb-item active">{indexes[2]}</li>
                </ol>
            </div>
        );
    }
}