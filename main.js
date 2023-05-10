const btnListarAulas = document.querySelector('#listar-aulas');
const divResultado = document.querySelector('#resultado');

btnListarAulas.addEventListener("click", async function() {
    const result = await fetch("http://localhost/ams/")
    .then((response) => {
        return response.json();
    })
    console.log(result);
    montarHTMLAulas(result);
})

const montarHTMLAulas = (aulas) => {
    aulas.forEach((aula) => {
        const btn = document.createElement("button");
        btn.innerHTML = aula;
        btn.addEventListener("click", async function() {
            const aulaLista = await fetch("http://localhost/ams/aula/" + aula)
            .then((response) => {
                return response.json();
            })
            aulaLista.forEach((novo) => {
                const conteudo = document.createElement("p");
                conteudo.innerHTML = novo;
                divResultado.appendChild(conteudo);
            })
        });
        divResultado.appendChild(btn);
    });
}