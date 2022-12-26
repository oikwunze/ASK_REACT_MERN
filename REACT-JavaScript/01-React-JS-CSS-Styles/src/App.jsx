import React from 'react';
import MyCard from "./components/MyCard";

const App = () => {
  return (
    <>
        <h2>App Component</h2>
        <MyCard heading={"Good Morning"}/>
        <MyCard heading={"Good Afternoon"}/>
        <MyCard heading={"Good Evening"}/>
    </>
  );
}
export default App;
