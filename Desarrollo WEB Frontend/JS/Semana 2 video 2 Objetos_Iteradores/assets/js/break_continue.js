
// usando break
// break nos ayuda a romper o finalizar
// el ciclo for o while

// for (let contador = 0; contador <= 10; contador++){
//     console.log(contador);
//     if (contador == 3){
//         break;
//     }
// }
// console.log('fin del ciclo for');


// usando continue
// continue nos ayuda a saltar al siguiente elemento del array
for (let contador = 0; contador <= 10; contador++){
    if (contador == 3){
        continue;
    }
    console.log(contador);
    // console.log("hola ciclo for");
}
console.log('fin del ciclo for');