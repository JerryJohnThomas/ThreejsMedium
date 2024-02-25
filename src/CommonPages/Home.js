import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
    return (
        <div className="HomeContainer">
            <h1>Three JS Medium Series</h1>
            Full Series - here
            <h3> Season 1</h3>
            <Link to="/s1e1">Episode 1 - Mesh </Link>
            <br />
            <br />
            <br />
            <div> PS: I know that this looks ugly but this works for now</div>
        </div>
    );
}

export default Home;
