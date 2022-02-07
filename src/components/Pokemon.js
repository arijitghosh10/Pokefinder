import React, { useEffect, useState } from "react";
import Pokecard from "./Pokecard";
import styles from './Pokemon.module.css';
const Pokemon = ()=>{
    const [pokemons,setPokemons] = useState([]);
    const [Searchterm,setSearchterm] = useState("");
    const SearchtermHandler = (e)=>{
        setSearchterm(e.target.value)
    }
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=854").then(res=>{
            if(!(res.status>=200 && res.status<300)) return;
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
    },[])
    return (
        <>
            <div className={styles.form}>
                <input 
                    value={Searchterm} 
                    onChange={SearchtermHandler} 
                    placeholder="Search over 800 pokemons..." 
                    autoFocus
                ></input>
            </div>
            <div className={styles.wrapper}>
            {pokemons.filter((val)=>{
                return Searchterm===""? val: (String(val.name).toLowerCase().includes(Searchterm.toLowerCase())) 
            }).map((pokemon,index)=>{
                return (
                    <Pokecard pokemon={pokemon} key={index} />
                )
            })}
        </div>
        </>
        
    )
}
export default Pokemon;