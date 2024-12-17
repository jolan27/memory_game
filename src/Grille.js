import Cartes from "./Cartes";
import { useEffect, useState } from "react";


const cardList = [
    {id:1, value : '🍒', clicked:'false', matched:'false'},
    {id:2, value : '🍇', clicked:'false', matched:'false'},
    {id:3, value : '🥝', clicked:'false', matched:'false'},
    {id:4, value : '🍓', clicked:'false', matched:'false'},
    {id:5, value : '🥥', clicked:'false', matched:'false'},
    {id:6, value : '🍋‍🟩', clicked:'false', matched:'false'},
    {id:7, value : '🫐', clicked:'false', matched:'false'},
    {id:8, value : '🍈', clicked:'false', matched:'false'},
    {id:9, value : '🍒', clicked:'false', matched:'false'},
    {id:10, value : '🍇', clicked:'false', matched:'false'},
    {id:11, value : '🥝', clicked:'false', matched:'false'},
    {id:12, value : '🍓', clicked:'false', matched:'false'},
    {id:13, value : '🥥', clicked:'false', matched:'false'},
    {id:14, value : '🍋‍🟩', clicked:'false', matched:'false'},
    {id:15, value : '🫐', clicked:'false', matched:'false'},
    {id:16, value : '🍈', clicked:'false', matched:'false'}
];

const Grille = () =>{

    useEffect(() => {
        
    }), [cardList]

    return (

        <div className="Table">
            {cardList.map((el, index) => (
                <Cartes key = {index} value = {el.value} />
            ))}
        </div>
        )
    }


export default Grille;
