import {ITour} from "../components/tour/models/ITour";

export class TourService {

    private static tours: ITour[] = [
        {
            sno: "AA001",
            name: "Paris",
            imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/74/aa/fc.jpg"
        },
        {
            sno: "AA002",
            name: "Singapore",
            imageUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3d/9f/2d.jpg"
        },
        {
            sno: "AA003",
            name: "Malaysia",
            imageUrl: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/9lvjd1p7nnn7ty0r1qya3qkxpmp2_1559499011_shutterstock_421599904.jpg"
        },
        {
            sno: "AA004",
            name: "India",
            imageUrl: "https://www.bespokeindiaholidays.com/wp-content/uploads/2013/05/North-India-Tours.gif"
        }
    ];

    public static getAllTours(): ITour[] {
        return this.tours;
    }
}