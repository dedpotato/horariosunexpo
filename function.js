
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
let listaTotal=[]
let opciones=materiasElegidas;
let nueva=[];
opciones.forEach(function(b){nueva.push([b])});
let agregado=[]
while(nueva.length){
    
    agregado=nueva;
    nueva=[];
    agregado.forEach(function(b){
        opciones.forEach(function(c){
            if(c<=b[b.length-1])return;
            let choque=false;
            b.forEach(function(d){
                if(matriz[c][d]!=0){choque=true};
            });
            if(!choque){
                let e = b;
                e.push(c);
                nueva.push(e)
            };
        });
    });
agregado.forEach(function(b){listaTotal.push(b)});
}

//codigo en desarrollo

var visualMatriz3 = '<ul>'
listaTotal.forEach(function(listaTotal) {
  visualMatriz3 += '<li>'+ listaTotal + '</li>';
}); 
visualMatriz3 += '</ul>';

document.getElementById("result").innerHTML = '</br>'+
visualMatriz1+'</br>'+materiasElegidas+'</br>'+visualMatriz2+'</br>'+visualMatriz3;
console.log(listaTotal)
}

