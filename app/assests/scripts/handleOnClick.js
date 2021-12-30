import { GetCards } from "../../component/cards/getCards/GetCards.js";

document.addEventListener("click",(e)=>{

    if(e.target.matches(".primerMazo")){GetCards(0)}

    if(e.target.matches(".segundoMazo")){GetCards(1)}

    if(e.target.matches(".tercerMazo")){GetCards(2)}

    if(e.target.matches(".cuartoMazo")){GetCards(3)}

    if(e.target.matches(".quintoMazo")){GetCards(4)}
    
})