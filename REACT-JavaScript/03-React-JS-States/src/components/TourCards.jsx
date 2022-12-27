import React, {useState} from 'react';

const TourCards = () => {

    const [tours, setTours] = useState([
        {
            sno : "AA001",
            name : "Paris",
            imageUrl : "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/aa/fc.jpg"
        },
        {
            sno : "AA002",
            name : "Singapore",
            imageUrl : "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/9f/2d.jpg"
        },
        {
            sno : "AA003",
            name : "Malaysia",
            imageUrl : "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/9lvjd1p7nnn7ty0r1qya3qkxpmp2_1559499011_shutterstock_421599904.jpg"
        },
        {
            sno : "AA004",
            name : "India",
            imageUrl : "https://www.bespokeindiaholidays.com/wp-content/uploads/2013/05/North-India-Tours.gif"
        }
    ]);

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card shadow-lg">
                            <img src={tours[0].imageUrl} alt="" className="" height={200}/>
                            <div className="card-body">
                                <p className="h3">{tours[0].name}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor excepturi, nobis quas recusandae repellendus veritatis. Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card shadow-lg">
                            <img src={tours[1].imageUrl} alt="" className="" height={200}/>
                            <div className="card-body">
                                <p className="h3">{tours[1].name}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor excepturi, nobis quas recusandae repellendus veritatis. Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card shadow-lg">
                            <img src={tours[2].imageUrl} alt="" className="" height={200}/>
                            <div className="card-body">
                                <p className="h3">{tours[2].name}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor excepturi, nobis quas recusandae repellendus veritatis. Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card shadow-lg">
                            <img src={tours[3].imageUrl} alt="" className="" height={200}/>
                            <div className="card-body">
                                <p className="h3">{tours[3].name}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor excepturi, nobis quas recusandae repellendus veritatis. Alias amet, aut excepturi explicabo facilis reiciendis sed veniam vero! Dolorem fuga natus quis sit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default TourCards;