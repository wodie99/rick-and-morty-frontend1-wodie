import "./Title.css"
import {Link} from "react-router-dom";
import React from "react";

export default function Title() {
    return <header>



        <div className={"Row1"}>
            <img id={"rm-logo"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"} alt={"Rick and Morty Logo"}/>
            <h1>Rick & Morty Character Gallery</h1>
        </div>
        {/*<div className={"Row2"}>*/}
        {/*    <div className={"L1"}>*/}
        {/*        <h3>Test 1</h3>*/}
        {/*        /!*<Link to ="/">Homepage</Link>*!/*/}
        {/*    </div>*/}
        {/*    <div className={"L2"}>*/}
        {/*        <h3>Test 2</h3>*/}
        {/*        /!*<Link to="/p1">GalleryPage</Link>*!/*/}
        {/*    </div>*/}
        {/*    <div className={"L3"}>*/}
        {/*        <h3>test 3</h3>*/}
        {/*        /!*<Link to="/p2">Impressum</Link>*!/*/}
        {/*    </div>*/}


        {/*</div>*/}


    </header>

}