import '../styles/animeCard.css'

export function AnimeCard (anime){
    const { myAnime } = anime
    console.log(myAnime)
    return <div id='animeArea'>
                <div id='animeCard'>  <h2>{myAnime.animeTitle}</h2>
                    <div id='animeImg'><img src={myAnime.animeImg} alt=""width={350} height={300} /></div>
                    <p>Nome: {myAnime.animeId}</p>
                    <p>Episodio {myAnime.episodeNum}</p>
                    <p></p>
                    

                    <div>
                    <a href={myAnime.episodeUrl} target="_blank"><button>link para assistir</button></a>
                    </div>
                </div>
    </div>
}
