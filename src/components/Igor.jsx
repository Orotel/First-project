import { useEffect, useState } from "react";


export function Igor () {
    
    const [myString, setMyString] = useState ("Igor")


    
    const myClick = () => {
        setMyString(myString + "a")

    }

    useEffect(function(){ // Meu primeiro parâmetro é uma função que vai acontecer sempre que o segundo parametro que é um array mudar.
        console.log("Paçoca")
    }, [myString])




    return(
        <div>
            <p >{myString} </p>
            <button onClick={myClick} >Clique aqui</button>



        </div>
    )

}