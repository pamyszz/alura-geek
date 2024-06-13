import { conectaApi } from "./conectaApi.js";



async function excluirProduto(ProdutoId) {
    try {
        await conectaApi.excluirProduto(ProdutoId);
        alert ("Produto excluido com sucesso!");
    } catch(error) {
        console.error("Erro ao excluir protuto", error);
    }

    window.location.reload(true);

}

// botoesExcluir.forEach(botao => {
//     botao.addEventListener("click", () => {
//         const idDoProduto = botao.dataset.idProduto;
//         excluirProduto(idDoProduto);
//     })
// })

export { excluirProduto };
