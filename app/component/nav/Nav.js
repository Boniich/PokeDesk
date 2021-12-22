function Nav(){

    const $navSection = document.createElement("header"),
    $nav = document.createElement("nav"),
    $title = document.createElement("h1");

    $title.innerHTML = "PokeDesk";

    $nav.appendChild($title);
    $navSection.appendChild($nav);

    return $navSection;


}

export default Nav;