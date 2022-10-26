import React from 'react';
//import map1 from '../../images/1stNorth3.png';
//import map2 from '../../images/1stSouth5.png';
//import map3 from '../../images/2ndNorth3.png';
//import map4 from '../../images/2ndSouth5.png';
import { SlideShowArrows, PanelSizer } from '../../Reusables/Elements.js';

export class MapPanel extends React.Component {
    render(){
        return(
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title float-left" data-card-widget="collapse">
                                <h5>Map</h5>
                            </div>

                            <div class="card-title cp-map-select-container">
                                <div id="cp-map-select" class="dropdown">
                                    <button type="button" class="btn btn-light btn-sm dropdown-toggle float-left" id="cp-map-select-name" data-toggle="dropdown" area-expanded="false">
                                        Annex North
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#" data-cp-item-index='0'>Annex North</a>
                                        <a class="dropdown-item" href="#" data-cp-item-index='1'>Annex South</a>
                                        <a class="dropdown-item" href="#" data-cp-item-index='2'>Courthouse North</a>
                                        <a class="dropdown-item" href="#" data-cp-item-index='3'>Courthouse South</a>
                                    </div>
                                    <PanelSizer/>
                                    <div class="card-tools float-right">
                                        <SlideShowArrows/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-body">
                            <div id="carouselMap" class="carousel slide" data-ride="carousel" data-interval="false">
                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                    <li data-target="#myCarousel" data-slide-to="2"></li>
                                    <li data-target="#myCarousel" data-slide-to="3"></li>
                                </ol>

								<div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" alt="Annex North"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" alt="Annex South"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" alt="Courthouse North"></img>
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" alt="Courthouse South"></img>
                                    </div>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <SlideShowArrows/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

/*
<a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <i class="fa-solid fa-angle-left fa-lg"></i>
</a>
<a class="right carousel-control" href="#myCarousel" data-slide="next">
    <i class="fa-solid fa-angle-right fa-lg"></i>
</a>
*/