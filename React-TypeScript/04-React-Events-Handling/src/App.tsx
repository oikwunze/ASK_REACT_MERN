import React from 'react';
import './App.css';
import NavBar from "./layout/NavBar";
import Counter from "./components/Counter";
import MobileCounter from "./components/MobileCounter";
import ProductCart from "./components/ProductCart";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={"Events Handling"} color={'bg-success'}/>
            {/*<Counter/>*/}
            {/* <MobileCounter/>*/}
            <ProductCart/>
        </>
    );
}

export default App;
