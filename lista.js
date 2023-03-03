let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa(){
    
    //Pega o valor do input quando apertar em adicionar.
    let valorInput = input.value;
 
    
    if ((valorInput != "") && (valorInput != null) && (valorInput != undefined)){

        //vai contar +1...
        ++contador;

        //Se não for nenhum do resultado acima, vai adicionar isso.
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput} 
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>"Deletar</button>
        </div>
    </div>`;
    //para colocar o JS no Html aqui precisa colocar o ($).  Ex:  ${valorInput}.


    //adicionar novo item no main.
    main.innerHTML += novoItem; // Como se fosse assim : main.innerHTML = main.innerHTML + novoItem;

    //zerar os campinhos.
    input.value = "";
    input.focus();
    }
}

function deletar(id){
    //vai remover tarefa do (id) que foi passado.
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item =  document.getElementById(id);
    var classe = item.getAttribute('class');

    //Quando clicar no item o que vai acontecer...
    if(classe == "item"){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    }else {
        var icone = document.getElementById('icone_'+id);
        icone.classList.add('mdi-circle-outline');
        icone.classList.remove('mdi-check-circle');
    }
}

input.addEventListener("keyup", function (event) {
        //SE TECLOU O ENTER(13), VAI ADICIONAR.
        if (event.keyCode === 13){
            event.preventDefault();
            btnAdd.click(); 
        }
});


