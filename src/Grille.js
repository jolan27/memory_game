import Cartes from "./Cartes";

const cardList = [0, 1, 0, 1];

const Grille = () =>{
    return (
        <div className="Table">
            {cardList.map((el, index) => (
                <Cartes key = {index} value = {el} />
            ))}
        </div>
        )
    }



export default Grille;





// export function Grille () {

//     var grille = document.createElement ('table')

//     for (var i=0; i<4; i++) {
//         var ligne = document.createElement ('tr')
//         grille.appendChild(ligne)
//     }

//     for (var j=0; j<; j++) {
//         var colonne = document.createElement('td')
//         ligne.appendChild(colonne)
//     }
// }