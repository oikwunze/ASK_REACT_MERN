import React from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import UserName from "./components/UserName";
import Registration from "./components/register/Registration";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={"Forms Handling"} color={'bg-success'}/>
            {/*  <UserName/>*/}
            <Registration/>
        </>
    );
}

export default App;
