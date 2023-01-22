import '../styles/animeCard.css'

export function AnimeCard (anime){
    const { myAnime } = anime
    console.log(myAnime)
    return <div id='animeArea'>
                <div id='animeCard'>  
                    <div id='animeImg'><img src={myAnime.animeImg} alt=""width={350} height={300} /></div>
                    <div>
                        <h2>{myAnime.animeTitle}</h2>

                        <p>Episodio:{myAnime.episodeNum}</p>
                        <a href={myAnime.episodeUrl} target="_blank"><button>link para assistir</button></a>
                    </div>
                </div>
    </div>
}
