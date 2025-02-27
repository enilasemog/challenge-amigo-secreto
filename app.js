let listaAmigos = [];
let listaSorteados = [];


function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value.trim(); // Remove espaços extras

    if (!nomeDoAmigo) {
        alert('Por favor, insira um nome.');
        return;
    }

    if (listaAmigos.includes(nomeDoAmigo)) {
        alert('Esse nome já foi adicionado.');
        return;
    }

    limparLista();
    listaAmigos.push(nomeDoAmigo);

    let lista = document.getElementById('listaAmigos');
    for (let i = 0; i < listaAmigos.length; ++i) {
        let li = document.createElement('li');
        li.innerText = listaAmigos[i];
        lista.appendChild(li);
    }

    limparCampo();
    }

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Por favor, insira um nome.');
    } else {
        let amigoSecreto = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
        let resultado = document.getElementById('resultado'); // Correção do seletor
        resultado.innerHTML = `🎁 Meu amigo secreto é: ${amigoSecreto} 🎉`;

        // Adiciona o nome sorteado à lista de sorteados
        listaSorteados.push(amigoSecreto);
        atualizarListaSorteados();

        // Remover o amigo sorteado da lista
        listaAmigos = listaAmigos.filter(amigo => amigo !== amigoSecreto);

        limparLista();
        setTimeout(() => {
            document.getElementById('resultado').innerHTML = '';
        }, 6000); // Limpa após 6 segundos 
}
}


// Atualiza a lista de sorteados na tela
function atualizarListaSorteados() {
    let lista = document.getElementById('listaSorteados');
    lista.innerHTML = '';

    for (let i = 0; i < listaSorteados.length; ++i) {
        let li = document.createElement('li');
        li.innerText = listaSorteados[i];
        lista.appendChild(li);
    }
}

// Atualiza a lista de amigos disponíveis
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; ++i) {
        let li = document.createElement('li');
        li.innerText = listaAmigos[i];
        lista.appendChild(li);
    }
}

function limparCampo() {
    nomeDoAmigo = document.querySelector('input');
    nomeDoAmigo.value = '';
}

function limparLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

