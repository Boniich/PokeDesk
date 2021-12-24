function Desk(props){

    let {name, img} = props


    const $desk = document.createElement("div"),
    $deskImg = document.createElement("img"),
    $deskTitle = document.createElement("h1");

    $desk.classList.add("desk")
    $deskImg.src = `${img}`
    $deskTitle.innerHTML = `${name}`

    $desk.appendChild($deskImg);
    $desk.appendChild($deskTitle);



    return $desk;

}

export default Desk;