function Cards(props){

    let {cards} = props;


    const $card = document.createElement("div");

    $card.innerHTML = `<img width = "250px" src="${cards[0].img}"></img>`;


    return $card;
}

export default Cards;