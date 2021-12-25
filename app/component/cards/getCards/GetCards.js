import { ajax } from "../../../helpers/ajax/ajax.js";
import Cards from "../Cards.js";

export async function GetCards(element){


    await ajax({
        url: "./app/assests/JSON/jsonFiles/cardsJson/cardsJson.json",
        cbSuccess: (cards) =>{
            console.log(cards);
            cards.forEach(card =>{
                element.appendChild(Cards(card));

            });
        }
    })

}