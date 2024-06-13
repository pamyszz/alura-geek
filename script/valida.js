// EM DESENVOLVIMENTO

// const camposDoFormulario = document.querySelectorAll('[required]');
// const formulario = document.querySelector('.sessao__inserir');

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const listaResostas = {
//         "nome": e.target.elements["nome"].value,
//         "valor": e.target.elements["valor"].value,
//         "imagem": e.target.elements["imagem"].value,
        
//     }

//     localStorage.setItem("mensagemUsuario", JSON.stringify(listaResostas));

//     e.target.reset();  // Limpar os campos do formulário

//     alert('Atenção!');

// })

// camposDoFormulario.forEach((campo) => {
//     campo.addEventListener("blur", () => verificaCampo(campo)); // blur ("desfoque", em português) se caracteriza por um clique fora do input, ou seja, assim que o campo que estava sendo preenchido estiver fora de foco, o event listener disparará a função verificaCampo.
//     campo.addEventListener("invalid", evento => evento.preventDefault())
// })

// const tiposDeErro = [
//     'valueMissing',
//     'typeMismatch',
//     'patternMismstch',
//     'tooShort',
//     'customError'
// ]

// const mensagens = {
//     nome: {
//         valueMissing: "O campo de nome não pode estar vazio.",
//         patternMismatch: "Por favor, preencha um nome válido.",
//         tooShort: "Quantidade de caracter dever ter no minimo 3 caracteres."
//     },
//     valor: {
//         valueMissing: "O campo de valor não pode estar vazio.",
//         typeMismatch: "Por favor, preencha com um número válido.",
//         tooShort: "Por favor, preencha com um número válido."
//     },
//     imagem: {
//         valueMissing: "O campo de imagem não pode estar vazio.",
//         typeMismatch: "Por favor, insira o link url da imagem",
//         tooShort: "Por favor, insira o link url da imagem"
//     },
// }

// function verificaCampo(campo){
//     let mensagem = "";
//     campo.setCustomValidity('');

//     // colocar if para validar campos se necessario aqui

//     console.log(campo.validity);
    
//     tiposDeErro.forEach(erro => {
//         if (campo.validity[erro]) {
//             mensagem = mensagens[campo.name][erro];
//             console.log(mensagem);   
//         }
//     })

//     const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
//     const validadorDeImput = campo.checkValidity();

//     if(!validadorDeImput) {
//         mensagemErro.textContent = mensagem;
//     } else {
//         mensagemErro.textContent = "";
//     }
// }




