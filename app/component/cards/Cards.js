function Cards(props){

    let {cards} = props;
    let length = cards.length;

    const $card = document.createElement("div");
    $card.classList.add("cards-grid");

    for(let e = 0; e<length;e++){
        
        $card.innerHTML += `
        <div class="cards">
        <img width = "250px" src="${cards[e].img}"></img>
        </div>`;
    }

    return $card;
}

export default Cards;