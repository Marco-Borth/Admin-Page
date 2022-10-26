import React from 'react';
import { PanelSizer } from '../../Reusables/Elements.js';

export class SystemStatusReport extends React.Component {
    render(){
        return(
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-8">
                    <div class="card card-success direct-chat direct-chat-success collapsed-card">
						<div class="card-header">
                            <h3 class="card-title text-dark">
                                <span class="cp-infobox-title">
                                    <a class="text-dark float-left" href="#" data-card-widget="collapse">
                                        <i class="fas fa-check"></i> Normal: 5
                                    </a>
                                </span>
                            </h3>

                            <div class="card-tools text-dark float-right">
                                <button id='reset-situation-button' type="button" class="btn btn-tool reset-situation-button" title="Reset Situation" data-widget="chat-pane-toggle">
									<span class="text-dark"><i class="fas fa-arrow-alt-circle-left fa-lg"></i></span>
								</button>
                                <button type="button" class="btn btn-tool" title="View Situation Hierachy"  data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="cp_mcMainPanel cp_mcSupplementalPanel">
                                    <span class="text-dark"><i class="fas fa-sitemap fa-lg"></i></span>
                                </button>
                                <PanelSizer/>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="direct-chat-messages">
                                <div class="direct-chat-msg">
                                    <BuildingReport title={"Annex"} dateValue={"5/16 2:15pm"}/>
                                    <BuildingReport title={"Courthouse"} dateValue={"5/16 2:15pm"}/>
                                    <BuildingReport title={"Detention Area [Courthouse]"} dateValue={"5/16 2:15pm"}/>
                                    <BuildingReport title={"Fire Station #1"} dateValue={"5/16 2:15pm"}/>
                                    <BuildingReport title={"Health Department"} dateValue={"5/16 2:15pm"}/>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer">
                            <a class="btn btn-light" title="View Situation Hierachy"  data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="cp_mcMainPanel cp_mcSupplementalPanel">
                                <i class="fas fa-sitemap fa-lg"></i> View Situation Hierachy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

function BuildingReport(props) {
    return(
        <div class="direct-chat-infos clearfix">
            <span class="direct-chat-name float-left">{props.title}</span>
            <span class="direct-chat-timestamp float-right">{props.dateValue}</span>
        </div>
    );
}