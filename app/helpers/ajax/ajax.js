export async function ajax(props){

    let {url, cbSuccess} = props;

    await fetch(url)
    .then(res => res.ok ? res.json():Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err =>{

        let message = err.statusText || "ocurrio un error";
        document.getElementById("desk-section-id").innerHTML = `<div>${err.status}:${message}</div>`;
        console.log(message);
    });
}