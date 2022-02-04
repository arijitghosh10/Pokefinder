import React, { useEffect, useState } from "react";
import Pokecard from "./Pokecard";
import styles from './Pokemon.module.css';
const Pokemon = ()=>{
    const [pokemons,setPokemons] = useState([]);
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1000").then(res=>{
            res.json().then(data=>{
                const pokes = []
                const response = data.results;
                response.forEach((value,ind) => {
                    ind++
                    let pokeObject = {
                        id:ind,
                        url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + ind + ".png",
                        name: value.name
                    }
                    pokes.push(pokeObject)
                });
                setPokemons(pokes) 
            })
        })
    })
    return (
        <div className={styles.wrapper}>
            {pokemons.map((pokemon,index)=>{
                return (
                    <Pokecard pokemon={pokemon} key={index} />
                )
            })}
        </div>
    )
}
export default Pokemon;