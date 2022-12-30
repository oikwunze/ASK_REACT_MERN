import React, {useState} from 'react';
import {ITour} from "./models/ITour";
import {TourService} from "../../services/TourService";
import TourCard from "./TourCard";

export const TourCards: React.FC = () => {

    const [tourList, setTourList] = useState<ITour[]>(TourService.getAllTours());

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    {
                        tourList.length > 0 && tourList.map((tour, index) => {
                            return (
                                <TourCard key={index} imageUrl={tour.imageUrl} name={tour.name}/>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
};
export default TourCards;