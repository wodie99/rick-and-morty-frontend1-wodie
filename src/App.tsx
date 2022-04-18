import React, {useEffect, useState} from 'react';
import './App.css';
import Title from "./components/Title";
import Gallery from "./components/Gallery";
import CharacterCard from "./components/CharacterCard";
import {Character} from "./model/Character";
import Pagination from "./components/Pagination";

// Pagination nach der Vorlage von Ray Alva https://javascript.plainenglish.io/pagination-with-the-rick-and-morty-api-1e136be0f225

function App() {
    const [loading, setLoading] = useState(true)
    const [characterArray, setCharacters] = useState([])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [pages, setPages] = useState()

    useEffect(() => {
        const url = currentPageUrl
        setLoading(true)
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setCharacters(data.results)
            setLoading(false);
            setNextPageUrl(data.info.next);
            setPrevPageUrl(data.info.prev);
            setPages(data.info.pages)
        }
        fetchData();
    }, [currentPageUrl])

    function nextPage() {
        // @ts-ignore
        setCurrentPageUrl(nextPageUrl)
    }

    function prevPage() {
        // @ts-ignore
        setCurrentPageUrl(prevPageUrl)
    }

    function goToPage(num: number) {
        setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
        if (loading) return "Loading..."
    }

    return (
        <div className="App">

            <Title/>

            <div className="pages">
                <Pagination
                    nextPage={nextPageUrl ? nextPage : null}
                    prevPage={prevPageUrl ? prevPage : null}
                    goToPage={goToPage}
                    pages={pages}
                />
            </div>

            <Gallery characters={characterArray}/>

            <Pagination
                nextPage={nextPageUrl ? nextPage : null}
                prevPage={prevPageUrl ? prevPage : null}
                goToPage={goToPage}
                pages={pages}
            />
        </div>

    );
}

export default App;
