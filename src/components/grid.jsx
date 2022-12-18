import React from "react";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";

const Grid = (props) => {
    const gridStyle = {
        margin: "2rem 5%",
        flexDirection: "column",
    };
    const cardStyle = {
        height: "16rem",
        width: "10rem",
        borderRadius: "1.5rem"
    }
    return (
        <>
        <div style={ gridStyle } className="d-flex">
            <div id="carouselControls" data-bs-ride="carousel" className="d-flex carousel slide flex-row align-items-center justify-content-center">
                <div style={ {width: "8%"} }>
                    <a className="btn-floating" href="#multi-item-example" data-bs-target="#carouselControls" data-bs-slide="prev"><ArrowCircleLeft  style={ { fontSize: "2.5rem"} }/></a>
                </div> 
                <div style={ {width: "84%"} }>
                    <div style={ { marginRight: "20px"} }>
                        <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                            <div className="carousel-inner" role="listbox">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-md-3 mr-6">
                                            <img className="card-img-top " style={ cardStyle } src={ props.photos[0] } alt={ props.title + " 0" } />
                                        </div>

                                        { [...Array(2)].map((e, i) =>
                                            <div className="col-md-3 clearfix d-none d-md-block mr-6" >
                                                { ( (i + 1) < props.photos.length) &&
                                                    <img className="card-img-top" style={ cardStyle } src={ props.photos[i + 1] } alt={ props.title + " " + (i + 1) } />
                                                }       
                                            </div>
                                        ) }

                                    </div>
                                </div>
                                
                                { [...Array( Math.ceil((props.photos.length - 3) / 3 ))].map((e, j) =>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img className="card-img-top" style={ cardStyle } src={ props.photos[3*(j + 1)] } />
                                            </div>
                                            { [...Array(2)].map((e, i) =>
                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    { ( (3*(j + 1) + i + 1) < props.photos.length) &&
                                                        <img className="card-img-top" style={ cardStyle } src={ props.photos[3*(j + 1) + 1 + i]}  />
                                                    } 
                                                </div>
                                            ) }               
                                        </div>
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={ {width: "8%"} }>
                    <a className="btn-floating" href="#multi-item-example" data-bs-slide="next"><ArrowCircleRight  style={ {fontSize: "2.5rem"} }/></a>
                </div> 
            </div>  
        </div>
        </>
    )
}

export default Grid;
