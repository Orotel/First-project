import { useEffect, useState } from "react";

export default function Anselmo () {
    const [myString, setMyString] = useState("Anselmo") //UseState
    
    function click () {
        setMyString(myString + 'A')
    }

    useEffect(function () {
        console.log('paçoca')
    }, [myString])

    return <div>
        <p>{myString}</p>
        <button onClick={click}>AQUI AQUI</button>
    </div>
}