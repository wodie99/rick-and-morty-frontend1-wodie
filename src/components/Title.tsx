import "./Title.css"
import {Link, NavLink} from "react-router-dom";
import React from "react";

export default function Title() {
    return <header>

        <div className={"Row1"}>
            <img id={"rm-logo"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"} alt={"Rick and Morty Logo"}/>
            <h1>Rick & Morty Character Gallery</h1>
        </div>
        <div className={"Row2"}>
            <div className={"L1"}>
                <Link to ="/">Homepage</Link>
            </div>
            <div className={"L2"}>
                <NavLink to="/p1">R&M_Gallery</NavLink>
            </div>
            <div className={"L3"}>
                <NavLink to="/p2">Impressum</NavLink>
            </div>
        </div>
    </header>

}