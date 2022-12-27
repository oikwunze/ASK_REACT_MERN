import React from 'react';

const TourCard = (props) => {
    return (
        <div className="col-sm-3">
            <div className="card shadow-lg">
                <img src={props.imageUrl} alt="" className="" height={200}/>
                <div className="card-body">
                    <p className="h3">{props.name}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor excepturi, nobis quas recusandae repellendus veritatis. Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?</p>
                </div>
            </div>
        </div>
    )
};
export default TourCard;