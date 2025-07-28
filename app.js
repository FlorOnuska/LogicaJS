let numMaxPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numMaxPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = 'intento';
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero del 1 al ${numMaxPosible}?`));

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }   //intentos = intentos + 1;
            //intentos +=1;
            intentos ++;
        //palabraIntentos = 'intentos';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`)
            break;
        }
    }
}
