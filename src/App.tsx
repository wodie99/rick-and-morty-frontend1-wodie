import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import Title from "./components/Title";
import Gallery from "./components/Gallery";
import CharacterCard from "./components/CharacterCard";
import {Character} from "./model/Character";



function App() {

    const [count, setCount] = useState<string>("")
    const [text, setText] = useState<string>("Rick")
    const [characters, setCharacters] = useState<Character[]>([])

    const fetchCharacters = () => {
        return fetch('https://rickandmortyapi.com/api/character?page=2')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Network error")
            })
            .catch(console.error)
    }

    let beispiel:string = "Beispiel";
    let beispiel2:string = "text"
    console.log(beispiel + beispiel2);

    useEffect(() => {
        fetchCharacters()
            .then(body => setCharacters(body.results))
    }, [])





    const onButtonClick = () => {

        setCount(text)
        console.log(count)
    }

    const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setText(event.target.value)

    }


    return (
        <div className="App">
            <Title/>
            <div className="inputName">
                <input value={text} onChange={onTextChange}/>
                {/*<h3> Button clicked: {count}</h3>*/}
                <button onClick={onButtonClick}>
                    Charactere suchen!
                </button>
            </div>
            {/*<Gallery characters={characterArrayFull}/>*/}
            <Gallery characters={characters.filter(character => character.name.includes(count))}/>
        </div>
    );
}

export default App;
