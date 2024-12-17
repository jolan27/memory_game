import './App.css';
import { useState } from "react";
import Grille from './Grille';

const Cartes = (props) => {


    const [clicked, setClicked] = useState(false)

    function onClicked() {
        setClicked (clicked === false ? true : false)
        console.log(clicked)
    }

    return (
        <div className="card">
            <button onClick={ () => onClicked()}>
                {clicked ? props.value : ""}
                {props.clicked}
            </button>
        </div>
    );
};


export default Cartes;