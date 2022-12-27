import React from 'react';
import NavBar from "./layout/NavBar";
import TourCards from "./components/TourCards";
import TourCardsOptimised from "./components/TourCardsOptimised";

const App = () => {
  return (
    <>
        <NavBar heading={"React with State Concept"} color={'bg-success'}/>
        <TourCardsOptimised/>
    </>
  );
}
export default App;
