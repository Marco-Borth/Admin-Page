import React from 'react';
import './ControlSidebar.css';

export class ControlSidebar extends React.Component {
    render(){
        return(
            <aside class="control-sidebar">
                <div class="p-3">
                    <h5>View Filter</h5>
                    <SelectFilter/>
                    <button type="button" class="btn btn-block bg-gradient-primary" data-widget="control-sidebar" data-slide="true">
                        Apply
                    </button>
                </div>
            </aside>
        );
    };
}

class SelectFilter extends React.Component {
    render(){
        return(
            <div class="select2-purple">
                <select class="select2" multiple="multiple" data-placeholder="Select a View" data-dropdown-css-class="select2-purple">
                    <option>All</option>
                    <option selected>Bluebonnet County</option>
                    <option>Annex</option>
                    <option>Courthouse</option>						
                    <option>Fire Station #1</option>
                    <option>Health Department</option>						
                </select>
            </div>
        );
    };
}