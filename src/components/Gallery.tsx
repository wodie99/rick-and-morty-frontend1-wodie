import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./Gallery.css";

type GalleryProps = {
    characters: Character[]
}

export default function Gallery({characters}: GalleryProps) {
    if (characters.length === 0) {
        return <h1>Leider keine Treffer!</h1>
    } else {
        return <div className={"character-gallery"}>{characters.map(character => <CharacterCard character={character}/>)
        } </div>
    }
}