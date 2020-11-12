/*
Algoritimo para calcular as raizes de uma equação do 2º grau(Ax² + Bx + C)
Sendo que os valores A B e C são fornecidos pelo usuário(conseidere que a equação possui dua raizes reais)
*/

let A = "";
let B = "";
let C = "";
let delta = "";
let resX1;
let resX2;

let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");

// x1.innerHTML = resX1;
// x2.innerHTML = resX2;

function resolver(){
    A = Number(document.getElementById("valorA").value);
    B = Number(document.getElementById("valorB").value);
    C = Number(document.getElementById("valorC").value);
       
    delta = B**2 - 4*A*C; 
    if (delta <= 0){
        document.getElementById("msg").innerHTML = "NÃO EXISTE RAIZ REAL";
    } else{
        resX1 =  (-B + delta**0.5) / (2*A);
        resX2 =  (-B - delta**0.5) / (2*A);
        x1.innerHTML = resX1.toFixed(2);  
        x2.innerHTML = resX2.toFixed(2); 
    }
}