import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Title from "./components/Title";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import Impressum from './pages/Impressum';
import CharacterDetailPage from './components/CharacterDetailPage';

function MainPage() {
    return (
        <div className={"Links"}>

            <h1>Hallo</h1>

            <Link to="/">MainPage</Link>
            <Link to="/p1">GalleryPage</Link>
            <Link to="/p2">Impressum</Link>

        </div>
    );
}

function App() {
    return (

        <div className="App">

            <Title/>

            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/p1" element={<GalleryPage/>}/>
                    <Route path="/character/:id" element={<CharacterDetailPage/>}/>
                    <Route path="p2" element={<Impressum/>}/>

                </Routes>
            </BrowserRouter>

        </div>
    );


}

export default App;
