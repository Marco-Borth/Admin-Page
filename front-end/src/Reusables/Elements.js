import React from 'react';

export class InputBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        }
    }

    appendix() {
        if(this.props.appendix != null) {
            return(<p>{this.props.appendix}</p>);
        }
    }
    
    render(){
        var type = "String"
        if(this.props.type != null) {
            type = this.props.type;
        }

        return(
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class={this.props.icon}/>
                  </span>
                </div>
                <input name="" class="form-control" value={this.props.value} placeholder={this.props.text} type={type}
                    onChange={(e) => this.setState({inputValue: e.target.value })}
                />
              </div>
              {this.appendix()}
            </div>
        );
    }
}

export function HelpDeskURL(props) {
    const linkStyle = { "color": "Blue" };

    return(<p><a href="./help" class={props.class} style={linkStyle}> Need Some Help? </a></p>)
}

export function SlideShowArrows() {
    return(
        <div>
            <LeftArrow/>
            <RightArrow/>
        </div>
    );
}

export function LeftArrow() {
    return(
        <a href="#carouselMap" role="button" class="btn btn-tool" data-slide="prev" title="Details">
            <i class="fa-solid fa-angle-left fa-lg"></i>
        </a>
    );
}

export function RightArrow() {
    return(
        <a href="#carouselMap" role="button" class="btn btn-tool" data-slide="next" title="Details">
            <i class="fa-solid fa-angle-right fa-lg"></i>
        </a>
    );
}

export function PanelSizer() {
    return(
        <div class="float-right">
            <CollapseButton></CollapseButton>
        </div>
    );
}

export function ExpandButton() {
    return(
        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Details" id="systemHealthButton">
            <span class="text-dark"><i class="fas fa-plus fa-lg"></i></span>
        </button>
    );
}

export function CollapseButton() {
    return(
        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Details">
            <i class="fas fa-minus fa-lg"></i>
        </button>
    );
}

export function TitleHyperlink(props) {
    if (props.href != null){
        return(<td><a href={props.href}>{props.title}</a></td>);
    } else {
        return(<td>{props.title}</td>);
    }
}
