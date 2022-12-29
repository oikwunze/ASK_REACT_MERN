import React from 'react';
import './App.css';
import MyCard from "./components/MyCard";

const App: React.FC = () => {
    return (
        <>
            <h2>Welcome to App Component</h2>
            <MyCard heading={"Good Morning"}/>
            <MyCard heading={"Good Afternoon"}/>
            <MyCard heading={"Good Evening"}/>
        </>
    );
}

export default App;
