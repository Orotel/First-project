import { useEffect, useState } from "react"
import { AnimeCard } from "./AnimeCard"
import '../styles/animeArea.css'

export function AnimeArea(){
    const [animesData, setAnimesData] = useState()
    
    useEffect(() => {
        fetch("https://gogoanime.consumet.org/recent-release")
            .then(response => response.json())
            .then(function (data) {
                setAnimesData(data)
            })

    }, [])

    return ( animesData ? animesData.map(function(myAnime){
        return <AnimeCard key={myAnime.animeId} myAnime={myAnime} />
    }) : <p>LOADING</p> )

}

