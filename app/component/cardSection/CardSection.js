import { GetCards } from "../cards/getCards/GetCards.js";


function CardSection(){

    const $cardSection = document.createElement("section"),
    $titleCardSection = document.createElement("h1"),
    $cardbox = document.createElement("div");
    $cardSection.classList.add("cards-section");
    $cardbox.classList.add("cards-box");

    $titleCardSection.innerHTML = "Cartas del Mazo";    
    $cardSection.appendChild($titleCardSection);

    GetCards($cardbox)
    $cardSection.appendChild($cardbox);

    return $cardSection;
}

export default CardSection;