/*Crie 3 arrays diferentes
O primeiro deve possuir apenas **números**, 
e estes números não devem seguir nenhuma ordem específica;*/
let arrayNumero = [12,13,17,22,30]

//O segundo array deve possuir apenas **strings**
let arrayString = ["peixe","carne","frango","ovo"]

//O terceiro array deve possuir **números**, **strings** e **booleanos**
let arrayMisto = [55, "marisco", 5>3]

//Imprima cada um dos arrays acima, utilizando `console.log()`
console.log(arrayNumero)
console.log(arrayString)
console.log(arrayMisto)

/*Imprima a quantidade de itens de cada array (utilize um
console.log() para cada impressão)*/
console.log(arrayNumero.length)
console.log(arrayString.length)
console.log(arrayMisto.length)

/*Imprima o primeiro item do primeiro array, o segundo item
do segundo array, e o terceiro item do terceiro array*/
console.log(arrayNumero[0])
console.log(arrayString[1])
console.log(arrayMisto[2])

/*Imprima uma informação booleana verdadeira sobre a
**inclusão** de um item do primeiro array, e uma informação
booleana falsa sobre a **inclusão** de um item ao terceiro
array. Isto é, um `includes()` verdadeiro, e outro falso.*/
arrayNumero.push(7>3)
console.log(arrayNumero[5])
arrayMisto.push(7<3)
console.log(arrayMisto[3])

//crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`
let arrayNumeroCopia = arrayNumero.slice()
let arrayStringCopia = arrayString.slice()
let arrayMistoCopia = arrayMisto.slice()

//Adicione um item `number` ao primeiro array. Utilize
//`console.log()` para exibir o original e a cópia
arrayNumeroCopia.push(61)
console.log(arrayNumero)
console.log(arrayNumeroCopia)

//Remova o último item do segundo array. Utilize `console.log
//()` para exibir o original e a cópia;
arrayStringCopia.pop()
console.log(arrayStringCopia)

//Remova o segundo item do terceiro array. Utilize `console.
//log()` para exibir o original e a cópia;
arrayMistoCopia.splice(1,1)
console.log(arrayMistoCopia)