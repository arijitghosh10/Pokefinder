import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './PokeDetails.module.css'
const PokeDetails = (props)=>{
    const { id }  = useParams()
    const [details,setDetails] = useState({name:'',sprites:[],ability:[]});
    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res=>{
            res.json().then(data=>{
                console.log(data)
                const { sprites } = data
                let allSprites = []
                for(const key in sprites){
                    if(sprites[key] && typeof sprites[key] !== 'object'){
                        allSprites.push(sprites[key]);
                    }     
                }
                let allAbilities = []
                const { abilities } = data
                abilities.forEach(element => {
                    if(element.ability.name) allAbilities.push(element.ability.name)
                });
                setDetails({
                    name:data.name,
                    sprites: allSprites,
                    ability: allAbilities
                })
            })
        })
    },[id])
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.name}>{details.name}</div>
            <div className={styles.images}>
                {details.sprites.map((el,ind)=>{
                    return <img src={el} alt="Pokemon" key={ind}/>
                })}
            </div>
            <div className={styles.details}>
                <h3>Abilities:</h3>
                {details.ability.map((el,ind)=>{
                    return <div key={ind}>{el}</div>
                })}
            </div>
        </div>
    )
}
export default PokeDetails;