import { ajax } from "../../../helpers/ajax/ajax.js";
import Desk from "../Desk.js";

export async function GetDesk(element){

    await ajax({
        url: "./app/assests/JSON/jsonFiles/desk.json",
        cbSuccess: (desks) =>{
            console.log(desks);
            desks.forEach(desk =>{
                element.appendChild(Desk(desk));
            });
        }
    })

}