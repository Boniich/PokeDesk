import Cards from "../Cards.js";

function RenderingCards(stateCopy){

    const render = stateCopy.cards.index;
    console.log("render",render);
    const cardsBox = document.getElementById("render-cards");
    cardsBox.innerHTML = null;
    cardsBox.appendChild(Cards(render));
}

export default RenderingCards;