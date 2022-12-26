import React from 'react';
import NavBar from "./layout/NavBar";
import MyCard from "./components/MyCard";
import cardImg1 from "./assets/img/card_1.jpg";
import cardImg2 from "./assets/img/card_2.jpg";
import cardImg3 from "./assets/img/card_3.jpg";
import cardImg4 from "./assets/img/card_4.jpg";

const App = () => {
  return (
    <>
        <NavBar heading={"Bootstrap Styles"} color={'bg-success'}/>
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <MyCard imageSrc={cardImg1} heading={'Paris'}/>
                </div>
                <div className="col-sm-3">
                    <MyCard imageSrc={cardImg2} heading={'Bangkok'}/>
                </div>
                <div className="col-sm-3">
                    <MyCard imageSrc={cardImg3} heading={'Malaysia'}/>
                </div>
                <div className="col-sm-3">
                    <MyCard imageSrc={cardImg4} heading={'Indonesia'}/>
                </div>
            </div>
        </div>
    </>
  );
}
export default App;
