
function lafuncion(matriz) {

var visualMatriz1 = '<ul>'
matriz.forEach(function(matriz) {
  visualMatriz1 += '<li>'+ matriz + '</li>';
}); 
visualMatriz1 += '</ul>';

let numeroDeMaterias =document.getElementById("numeromaterias").innerHTML
let materiasElegidas=[]
for(let i = 1;i<numeroDeMaterias;i++){
    if(document.getElementById("materia"+i).checked){
        materiasElegidas.push(i);
    }    
}

let matrizPequena = []
let tamano=materiasElegidas.length;
for(let i = 0; i<materiasElegidas.length;i++){
    let a= [];
    for(let j = 0; j<materiasElegidas.length;j++){
        //window.alert(materiasElegidas[i]+' '+materiasElegidas[j]+' '+matriz[materiasElegidas[i]][materiasElegidas[j]])
        a.push(matriz[materiasElegidas[i]][materiasElegidas[j]]);
    }
    matrizPequena.push(a);
}

var visualMatriz2 = '<ul>'
matrizPequena.forEach(function(matrizPequena) {
  visualMatriz2+= '<li>'+ matrizPequena + '</li>';
}); 
visualMatriz2 += '</ul>';

//codigo en desarrollo
let listaNueva = materiasElegidas.map(i => [i]);
let listaAgregados = [];
let listaTotal = [];
let tablaInterseccionesPura=matriz;

while (listaNueva.length > 0) {
    // Add items from listaAgregados to listaTotal
    for (let i of listaAgregados) {
        listaTotal.push(i);
    }
    listaAgregados = [];

    // Move items from listaNueva to listaAgregados
    for (let i of listaNueva) {
        listaAgregados.push(i);
    }
    listaNueva = [];

    // Process listaAgregados to create new combinations
    for (let i of listaAgregados) {
        for (let j of materiasElegidas) {
            let elElementoNoChoca = true;
            if (j < i[i.length - 1]) continue;
            if (i.includes(j)) continue;

            // Check for intersections
            for (let k of i) {
                if (tablaInterseccionesPura[k][j] !== 0) {
                    elElementoNoChoca = false;
                    break; // Exit the loop if a conflict is found
                }
            }

            if (elElementoNoChoca) {
                listaNueva.push([...i, j]); // Create a new array with the current element added
            }
        }
    }
}

// Add any remaining items in listaAgregados to listaTotal
for (let i of listaAgregados) {
    listaTotal.push(i);
}

//codigo en desarrollo

var visualMatriz3 = '<ul>'
listaTotal.forEach(function(a) {
  visualMatriz3 += '<li>'+ a + '</li>';
}); 
visualMatriz3 += '</ul>';

document.getElementById("result").innerHTML = '</br>'+
visualMatriz1+'</br>'+materiasElegidas+'</br>'+visualMatriz2+'</br>'+visualMatriz3;
//console.log(listaTotal)
listaTotal=0
}

