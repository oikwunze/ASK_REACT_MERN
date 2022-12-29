import React from "react";

interface IProps {
    heading: string;
}

const MyCard: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="heading">{props.heading}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, eligendi, illum. Accusamus aut
                        consequuntur cupiditate delectus deleniti dolor eveniet fuga illo, inventore, ipsum iure neque
                        nisi nulla perspiciatis sunt vitae.</p>
                </div>
            </div>
        </>
    )
};
export default MyCard;