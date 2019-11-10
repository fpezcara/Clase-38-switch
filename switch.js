//  Escribamos un programa que reciba 
//  el numero de un mes via prompt
//  y le devuelva al usuario un alerta diciéndole
//  cuántos días tiene ese mes
//  TIP: mejoren este código declarando variables 

let mes = prompt("Ingrese un mes")

let veintiocho = "El mes tiene 28 días"
let treinta = "El mes tiene 30 días"
let treintayuno = "El mes tiene 31 días"

switch (mes) {
    case "1":
        alert(treintayuno)
        break;
    case "2":
        alert(veintiocho)
        break;
    case "3":
        alert(treintayuno)
        break;
    case "4":
        alert(treinta)
        break;
    case "5":
        alert(treintayuno)
        break;
    case "6":
        alert(treinta)
        break;
    case "7":
        alert(treintayuno)
        break;
    case "8":
        alert(treintayuno)
        break;
    case "9":
        alert(treinta)
        break;
    case "10":
        alert(treintayuno)
        break;
    case "11":
        alert(treinta)
        break;
    case "12":
        alert(treintayuno)
        break;
    default:
        alert("No ha ingresado ningún mes")
        break;
}