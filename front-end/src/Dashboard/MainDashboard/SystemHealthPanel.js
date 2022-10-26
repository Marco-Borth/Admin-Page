import React from 'react';
import { PanelSizer } from '../../Reusables/Elements.js';

export class SystemHealthPanel extends React.Component {
    render(){
        return(
            <div class="row">
                <div class="col-sm-12 col-md-8 col-lg-8">
					<div class="card card-success direct-chat direct-chat-success collapsed-card">
						<div class="card-header">
                            <h3 class="card-title">
                                <a class="text-dark float-left" data-card-widget="collapse">
                                    <i class="fas fa-heartbeat"></i> System Health: Good <i class="fa-regular fa-face-smile"></i> 
                                </a> <PanelSizer/>
                            </h3>
						</div>

                        <div class="card-body">
                            <div class="direct-chat-messages">
								<div class="direct-chat-msg">
                                    <div class="direct-chat-infos clearfix">
									    <span class="direct-chat-name float-left">All 60 devices connected</span>
									    <span class="direct-chat-timestamp float-right">As of right now</span>
									</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}