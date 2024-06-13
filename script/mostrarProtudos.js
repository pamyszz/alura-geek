import { conectaApi } from "./conectaApi.js";
import { excluirProduto } from "./excluiProdutos.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, valor, imagem, id) {
    const produto = document.createElement("li");
    produto.className = "sessao__itens__itens";
    produto.innerHTML = `<div>
    <img class="sessao__itens__imagem" src="${imagem}" alt="">
    <h3 class="sessao__itens__titulo" >${nome}</h3>
    <div class="sessao__itens__valor__delete">
        <h2 class="sessao__itens__valor"> <strong>R$ ${valor}</strong></h2>
        <button id="${id}" data-excluir>
            <a><img src="./assets/excluir.png" alt="botao excluir"></a>
        </button>
    </div>
</div>`

    return produto;
}


async function listaProdutos() {
    try { 
        const listaApi = await conectaApi.listaProdutos();
        if(listaApi.length > 0) {
            listaApi.forEach(elemento => {
                lista.appendChild(constroiCard(elemento.nome, elemento.valor, elemento.imagem, elemento.id));
                });
        
            const botoesExcluir = document.querySelectorAll("[data-excluir]");
            botoesExcluir.forEach(btn => {
                btn.addEventListener("click", () => excluirProduto(btn.id));
            });
        } else {
            products.innerHTML = `<h2 class="mensagem__titulo">Nenhum produto foi adicionado!</h2>`;
        }
        
    } catch (error) {
       lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum produto foi adicionado!</h2>`;
       console.error("Erro ao listar produtos", error) 
    }
}

listaProdutos();
