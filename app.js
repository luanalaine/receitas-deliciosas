let receitas = [];

function adicionarReceita() {
    let nomeReceita = document.getElementById('nome-receita').value;
    let ingredientes = document.getElementById('ingredientes').value.split(',');

    if (nomeReceita.trim() !== '' && ingredientes.length > 0) {
        receitas.push({
            nome: nomeReceita.trim(),
            ingredientes: ingredientes.map(ingrediente => ingrediente.trim())
        });

        exibirReceitas();
        limparCampos();
    } else {
        alert('Por favor, preencha o nome da receita e a lista de ingredientes.');
    }
}

function exibirReceitas() {
    let lista = '<ul class="list-group">';
    receitas.forEach(receita => {
        lista += `<li class="list-group-item">${receita.nome}: ${receita.ingredientes.join(', ')}</li>`;
    });
    lista += '</ul>';

    document.getElementById('lista-receitas').innerHTML = lista;
}

function limparCampos() {
    document.getElementById('nome-receita').value = '';
    document.getElementById('ingredientes').value = '';
}
