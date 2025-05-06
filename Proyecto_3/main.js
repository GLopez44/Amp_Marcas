localStorage.setItem('nombre','Movil_de_Raul');

alert(localStorage.getItem('nombre'));

let aFrutas = ['kiwi','movil_de_raul','fruta del dragon']; //Esto sale mal no guarda array guarda texto//
localStorage.setItem('array_frutas',aFrutas);
