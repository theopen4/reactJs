import React, {FunctionComponent} from "react";
import Pokemon from "../models/pokemon";

type Props ={
    pokemon: Pokemon

};
const PokemonCard: FunctionComponent<Props> = ({pokemon}) =>{
    return (
        <div>
            ce composant est charge d afficher les pokemons: {pokemon.name}
        </div>
    )

} 

export default PokemonCard;