let busca = document.querySelector(".busca");
busca.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let url = "https://www.google.com/search?q= " + busca.value;
        window.open(url, "_self");
    }
})

const panel1 = document.getElementById("panel1")
var pagina ="https://www.twitch.tv/auronplay"
function AbrirPagina(){
    location.href=pagina
}
panel1.addEventListener("click", AbrirPagina)



const panel2 = document.getElementById("panel2")
var pagina2 ="https://www.twitch.tv/juansguarnizo"
function AbrirPagina2() {
    location.href=pagina2
}
panel2.addEventListener("click", AbrirPagina2)