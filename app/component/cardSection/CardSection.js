function CardSection(){

    const $cardSection = document.createElement("section"),
    $titleCardSection = document.createElement("h1"),
    $cardbox = document.createElement("div");

    $cardSection.classList.add("cards-section");
    $cardbox.classList.add("cards-box");
    $cardbox.id = "render-cards";

    $titleCardSection.innerHTML = "Cartas del Mazo";    
    $cardSection.appendChild($titleCardSection);
    $cardSection.appendChild($cardbox);

    return $cardSection;
}

export default CardSection;