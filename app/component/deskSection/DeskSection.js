import Desk from "../desk/Desk.js";
import { GetDesk } from "../desk/getDesk/GetDesk.js";

function DeskSection(){

    const $deskSection = document.createElement("section"),
    $deskBox = document.createElement("div"),
    $deskSectionTitle = document.createElement("h1");

    $deskSection.id = "desk-section-id";
    $deskSection.classList.add("desk-section");
    $deskBox.classList.add("deskBox");

    $deskSectionTitle.innerHTML = "Mazos";
    $deskSection.appendChild($deskSectionTitle);
    GetDesk($deskBox);
    $deskSection.appendChild($deskBox);

    return $deskSection;
}

export default DeskSection;