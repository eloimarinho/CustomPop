var missao = document.querySelector('.missao');
var visao = document.querySelector('.visao');
var valores = document.querySelector('.valores');
var missaoClick = [1];
var vissaoClick = [1];
var valoresClick = [1];

function clicar(acao, acaoClick){
acao.addEventListener("click", function(event){
    event.preventDefault();
    acaoClick.push(1);
    if (acaoClick.length % 2 == 0){
        acao.children[2].classList.remove("none"); 
    }else{
        acao.children[2].classList.add("none"); 
    }
})}

clicar(missao, missaoClick);
clicar(visao, vissaoClick);
clicar(valores, valoresClick);