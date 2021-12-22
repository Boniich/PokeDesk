import Nav from "./component/nav/Nav.js";

function App(){
    const $root = document.getElementById("root");

    $root.innerHTML = null;

    $root.appendChild(Nav());

}

export default App;