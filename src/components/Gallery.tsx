import {Character} from "../model/Character";
import CharacterCard from "./CharacterCard";
import "./Gallery.css";
import {ChangeEvent, useState} from "react";

type GalleryProps = {
     characters: Character[]
}

export default function Gallery({characters}:GalleryProps){
     
     const [input, setInput] = useState<string>("")
     const [filteredCharacters, setFilteredCharacters] = useState<Character[]>(characters);

     const getInput = (event: ChangeEvent<HTMLInputElement>) => setInput(event.target.value)

     const searchCharacter = () =>{
          setFilteredCharacters(characters.filter(character => character.name.includes(input)));
     }

     const resetInput = () => {
         setInput("");
         setFilteredCharacters(characters);
     }



     return    <div>
                    <div className={"searchbar"}>
                        <label>Search Character</label>
                        <input value={input} onChange={getInput} id={"input-field"}/>
                        <input type={"submit"} value={"Search"} onClick={searchCharacter}/>
                        <button onClick={resetInput}>Reset</button>
                    </div>
                    <div className={"character-gallery"}>{filteredCharacters.map(character => <CharacterCard character = {character} />)
                    }
                    </div>
               </div>
}