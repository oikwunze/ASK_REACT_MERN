import React from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import TourCards from "./components/tour/TourCards";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={"Bootstrap Styles"} color={'bg-success'}/>
            <TourCards/>
        </>
    );
}

export default App;
