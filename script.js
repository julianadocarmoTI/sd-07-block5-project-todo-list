const list = document.getElementById('lista-tarefas');
let listaCompleta;

function addElement() {
  const textInput = document.getElementById('texto-tarefa');
  const tarefaDigitada = textInput.value;
  const elementList = document.createElement('li');
  list.appendChild(elementList).classList = 'item-list';
  elementList.textContent = tarefaDigitada;
  textInput.value = '';

  // marca e desmarca quando clicado 1 vez
  let itensList = document.querySelectorAll('.item-list');
  for (let index = 0; index < itensList.length; index += 1){
    let itemSelecionado = itensList[index];
    itemSelecionado.addEventListener('click', function(){
      for (let index = 0; index < itensList.length; index += 1){
        let apagaCor = itensList[index];
        apagaCor.style.backgroundColor = ''; 
    }
    itemSelecionado.style.backgroundColor = 'rgb(128, 128, 128)';
});  
}

for (let index = 0; index < itensList.length; index += 1){
    let itemDuploClique = itensList[index];
    itemDuploClique.addEventListener('dblclick', function(){
        if (itemDuploClique.classList.contains('completed')){
            itemDuploClique.classList.remove('completed');
            itemDuploClique.style.textDecoration = '';
    } else {
        itemDuploClique.classList.add('completed');
        let prop = window.getComputedStyle(itemDuploClique).getPropertyValue('text-decoration');
        itemDuploClique.style.textDecoration = prop;
    }
    });
}
   
}

const buttonAdd = document.getElementById('criar-tarefa');
buttonAdd.addEventListener('click', addElement);

let itensList = document.querySelectorAll('.item-list');

function apagarLista(){
 let itens = document.getElementsByTagName('li');
 let lista = document.getElementsByTagName('ol')[0];
 for (let index = itens.length - 1; index >= 0 ; index -= 1){
    lista.removeChild(itens[index]);
 }
}

function apagarFinalizados() {
  let lista = document.getElementsByTagName('ol')[0];
  let itens = document.getElementsByTagName('li');
   for (let index = itens.length - 1; index >= 0; index -= 1){
       if (itens[index].classList.contains('completed')) {
            lista.removeChild(itens[index]);
       }
   }
}

let buttonApaga = document.getElementById('apaga-tudo');
buttonApaga.addEventListener('click', apagarLista);

let buttonRemoveFinalizados = document.getElementById('remover-finalizados');
buttonRemoveFinalizados.addEventListener('click', apagarFinalizados);