import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {Character} from "../model/CharacterLong";
import "./CharacterDetailPage.css"

export default function CharacterDetailsPage() {

    const [character, setCharacter] = useState<Character>()
    const params = useParams()
    const id = params.id
    console.log("ID ist: " + id)

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/" + id)
            .then(response => response.data)
            .then(data => setCharacter(data))
            .catch(console.error)


    }, [])

    console.log(character)

    return (
        <div className={"output"}>

            {character && <h2>Name:  {character.name}</h2>}
            {character && <img src={character.image}/>}
            {character && <h3>Status: {character.status}</h3>}
            {character && <h3> Location: {character.location.name}</h3>}
            {character && <h3> Origin: {character.origin.name}</h3>}
            {character && <h3> Species: {character.species}</h3>}
            {character && <h3> Gender: {character.gender}</h3>}
            {character && <h3> Type: {character.type}</h3>}

        </div>

    )
}
