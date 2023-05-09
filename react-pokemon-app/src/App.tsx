import React ,{FunctionComponent, useState, useEffect} from "react";
import Pokemon from "./models/pokemon";
import POKEMONS from "./models/mock-pokemon";

const App: FunctionComponent = ()=>{
    const [pokemon, setPokemons]= useState<Pokemon[]>([]);
    useEffect(()=>{
        setPokemons(POKEMONS);
    },[])


    return(
        <div>
            <h1>Pokedex</h1>
            <p>il ya {pokemon.length} dans le pokedex</p>
        </div>
        
    )

}

export default App;