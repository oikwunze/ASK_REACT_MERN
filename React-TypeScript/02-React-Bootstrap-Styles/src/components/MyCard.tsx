import React from 'react';

interface IProps {
    imageSrc: string;
    heading: string;
}

const MyCard: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="card mt-3 shadow-lg">
                <img src={props.imageSrc} alt="" className="img-fluid"/>
                <div className="card-body">
                    <p className="h3">{props.heading}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore dolores in ipsam qui quia
                        saepe veniam, vero vitae voluptatem. Ab consequatur laboriosam nihil numquam officia saepe
                        sapiente sunt voluptatum.</p>
                </div>
            </div>
        </>
    )
};
export default MyCard;