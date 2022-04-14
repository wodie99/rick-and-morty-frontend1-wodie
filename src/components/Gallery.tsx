import {Character} from "../model/Character";

type GalleryProps = {
     characters: Character[]
}

export default function Gallery({characters}:GalleryProps){
     return  <div>{characters.map(character => <div>{character.name}</div>)

     } </div>
}