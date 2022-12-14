import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import formatType from "../helpers/format-type";
import Pokemon from "../models/Pokemon";
import "./pokemon-card.css";

/**
 * The property "pokemon" must be filled.
 */
type Props = {
    pokemon: Pokemon,
};

/**
 * This function component allows to retrieve main information regarding a specific pokemon.
 * 
 * @param param0 pokemon
 * @returns PokemonCard
 */
const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {

    return (
        <div className="col s6 m4 zoom" key={pokemon.id}>
            <div className="card">
                <img src={pokemon.image} className="card-img-top" alt={pokemon.name} />
                <div className="card-body">
                    <h5 className="card-title"><b>{pokemon.name}</b></h5>
                    <p className="card-text">
                        {pokemon.apiTypes.map(type => (
                            <span key={type.name} className={formatType(type.name)}>{type.name}</span>
                        ))}
                        <Link to={`/pokemon/${pokemon.id}`}><button type="button" className="btn btn-primary" style={{"width": "100%", "marginTop" : "10px"}}>Voir le détail</button></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;
