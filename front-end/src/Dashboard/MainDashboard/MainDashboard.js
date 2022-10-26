import React from 'react';
import '../../Reusables/ContentWrapper.css';
import { ContentHeader } from '../../Reusables/ContentHeader.js';
import { SystemHealthPanel } from './SystemHealthPanel.js';
import { SystemStatusReport } from './SystemStatusReport.js';
import { MapPanel } from './MapPanel.js';
import { AreaAccessPanel } from './AreaAccessPanel.js';
import { AccessDeniedReportPanel } from './AccessDeniedReportPanel.js';
import { AreaAccessStatsPanel } from './AreaAccessStatsPanel.js';
//import SystemHealthReport from "./SystemHealthReport";

export class MainDashboard extends React.Component {
    render(){
        return(
            <div class="content-wrapper">
                <ContentHeader 
                    Title="Dashboard"
                    Breadcrumbs="Home/Dashboard"
                />
                <div class="content">
                    <div class="container-fluid">
                        <SystemHealthPanel/>
                        <SystemStatusReport/>
                        <MapPanel/>
                        <AreaAccessPanel/>
                        <AccessDeniedReportPanel/>
                        <AreaAccessStatsPanel/>
                    </div>
                </div>
            </div>
        );
    };
}