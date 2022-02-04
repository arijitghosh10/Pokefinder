import React from "react";
import { Link } from "react-router-dom";
import styles from './Pokecard.module.css';

const Pokecard = ({pokemon})=>{
    const { id,url,name } = pokemon
    return (
        <Link to={"/pokemon/" + id} className={styles.link}>
            <div className={styles.pokemon}>
                <img src={url} alt="pokemon" />
                <h3>{name}</h3>
            </div>
        </Link>
    )
}
export default  Pokecard;