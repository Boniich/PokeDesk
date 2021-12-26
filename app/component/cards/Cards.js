function Cards(props){

    let {cards} = props;
    let length = cards.length;

    const $card = document.createElement("div");

    for(let e = 0; e<length;e++){
        $card.innerHTML += `<img width = "250px" src="${cards[e].img}"></img>`;
    }

    return $card;
}

export default Cards;