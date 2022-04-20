import {Character} from "../model/Character";
import "./CharacterCard.css";
import {useNavigate} from "react-router-dom";

type CharacterCardProps = {
    character : Character
}

export default function CharacterCard( { character } : CharacterCardProps ) {

    const navigate = useNavigate()

    const onCardClick = () => {
        console.log("Click in CharacterCard")
        console.log(character.id)
        navigate(`/character/${character.id}`)
    }


    return <div className="character-card" onClick={onCardClick}>
        <h2> {character.name} </h2>
        <img src={character.image}/>
        <h3> Status: {character.status}</h3>
        <h4> Origin: {character.origin.name}</h4>
    </div>
}