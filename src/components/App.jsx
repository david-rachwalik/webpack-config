import "../styles/index.scss";
import React from "react";
import "./Items";
import Recipes from "./Recipes";

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>O hai, React</h1>
                </section>
            </main>
            <Recipes />
        </>
    );
};

export default App;
