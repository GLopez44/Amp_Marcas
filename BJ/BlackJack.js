//Primera mano//

let carta1 = Math.floor(Math.random() * 12)+1
let carta2 = Math.floor(Math.random() * 12)+1
alert("Tus cartas son "+carta1+" y "+carta2);
if(carta1 > 10){
    carta1 = 10
}
if(carta2 > 10){
    carta2 = 10
}
let suma_cartas = carta1+carta2
alert("La suma de las cartas es="+suma_cartas)
let decision = prompt("Quieres plantarte(P) o otra carta(C)")

//Decision P//

if(decision == "P"){
    let crupier1 = Math.floor(Math.random() * 12)+1;
    let crupier2 = Math.floor(Math.random() * 12)+1;
    if(crupier1 > 10){
        crupier1 = 10
    }
    if(crupier2 > 10){
        crupier2 = 10
    }
    let suma_crupier1 = crupier1+crupier2
    alert("Las cartas del crupier son "+crupier1+" y "+ crupier2)
    if(suma_cartas>suma_crupier1){
        alert("Le has ganado al crupier")
    }
    else{
        alert("El crupier te gana")
    }
}

//Decision C//

if(decision == "C"){
    let carta3 = Math.floor(Math.random() * 12)+1
    if(carta3 > 10){
        carta3 = 10
    }
    alert("Tu nueva carta es "+carta3)
    let suma_c = carta3+suma_cartas
    alert("Esta es la suma de tus cartas nuevas "+suma_c)
    if(suma_c > 21){
        alert("Te has pasado gana el crupier")
    }
    else if(suma_c < 22){
        alert("Le ganas al crupier")
    }
    else{
        alert("Le has ganado al crupier")
    }
}