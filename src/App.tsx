import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Title from "./components/Title";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import Impressum from './pages/Impressum';
import CharacterDetailPage from './components/CharacterDetailPage';

function MainPage() {
    return (
        <div className={"Homepage"}>

            <h1>Hallo auf der Startseite</h1>

        </div>
    );
}

function App() {


    return (

        <div className="App">



            <BrowserRouter>
                <Title />
                <Routes>
                    <Route path={"/"} element={<MainPage />}/>
                    <Route path={"/p1"} element={<GalleryPage />}/>
                    <Route path={"/p2"} element={<Impressum />}/>
                </Routes>
            </BrowserRouter>


        </div>
    );


}

export default App;
