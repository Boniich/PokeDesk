import { ajax } from "../../../helpers/ajax/ajax.js";
import Render from "../renderingCards/RenderingCards.js";

export async function GetCards(index){

    const state = {
        cards: [],
    }

    const getState = () => JSON.parse(JSON.stringify(state));
    const stateCopy = getState();


    await ajax({
        url: "./app/assests/JSON/jsonFiles/cardsJson/cardsJson.json",
        cbSuccess: (cards) =>{
            console.log(cards);

            let card ={
                index: cards[index],
            }

            stateCopy.cards = card;

        }
    })

    Render(stateCopy)
}