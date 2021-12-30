import CardSection from "./component/cardSection/CardSection.js";
import DeskSection from "./component/deskSection/DeskSection.js";
import Nav from "./component/nav/Nav.js";

function App(){
    const $root = document.getElementById("root");
    
    $root.innerHTML = null;

    $root.appendChild(Nav());
    $root.appendChild(DeskSection());
    $root.appendChild(CardSection());

}

export default App;