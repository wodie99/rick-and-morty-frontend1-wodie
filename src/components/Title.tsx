import "./Title.css"

export default function Title() {
    return <div className="title-block">
        <img id={"rm-logo"} src={"https://rickandmortyapi.com/icons/icon-512x512.png"} alt={"Rick and Morty Logo"}/>
        <h1>Rick & Morty Character Gallery</h1>
    </div>
}