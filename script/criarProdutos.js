import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    

    try {
        await conectaApi.criarProduto(nome, valor, imagem);
        alert ("Produto cadastrado!");

    } catch (error) {
        console.error("Erro ao criar produto:", error); // pode tirar 
    }

    window.location.reload(true);
}

formulario.addEventListener("submit", evento => criarProduto(evento));