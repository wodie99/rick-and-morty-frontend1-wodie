import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";

type GalleryProps = {
     characters: Character[]
}

export default function Gallery({characters}:GalleryProps){
     return  <div>{characters.map(character => <CharacterCard character = {character} />)

     } </div>
}