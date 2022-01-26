/*
Leia um valor inteiro N. Apresente o quadrado de cada um dos valores pares, de 1 até N, inclusive N, se for o caso.

Entrada
A entrada contém um valor inteiro N (5 < N < 2000).

Saída
Imprima o quadrado de cada um dos valores pares, de 1 até N, conforme o exemplo abaixo.

Tome cuidado! Algumas linguagens tem por padrão apresentarem como saída 1e+006 ao invés de 1000000 o que ocasionará resposta errada. Neste caso, configure a precisão adequadamente para que isso não ocorra.
*/

let lines =[1,2,3,4,5,6,7,8,9];

var N = parseInt(lines.shift());
for (let i=0; i< lines.length; i++) {
	if ( 5<lines[i] && lines[i]<2000 && lines[i]%2 ===0) console.log(lines[i]*lines[i], " , ", lines[i]);    //escreva sua lógica nos espaços em branco
}