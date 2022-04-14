import {Character} from "../model/Character";

type CharacterCardProps = {
    character : Character
}

export default function CharacterCard( { character } : CharacterCardProps ) {
    return <div className = {"character-card"}>
        <h2> {character.name} </h2>
    </div>
}