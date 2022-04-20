//problema 1
function valivarn(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8 || teclado == 32) return true;
    var patron = /[a b c d e f g h i j k l m n ñ o p q r s t u v w x y z A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
//Problema 2
function problema2(){
    var x = [parseInt(document.getElementById("p2-x1").value),
    parseInt(document.getElementById("p2-x2").value),
    parseInt(document.getElementById("p2-x3").value),
    parseInt(document.getElementById("p2-x4").value),
    parseInt(document.getElementById("p2-x5").value)]
    var y = [parseInt(document.getElementById("p2-y1").value),
    parseInt(document.getElementById("p2-y2").value),
    parseInt(document.getElementById("p2-y3").value),
    parseInt(document.getElementById("p2-y4").value),
    parseInt(document.getElementById("p2-y5").value)]
    for (var i = 0;<x.length; ++){
        if(x[i] <0){
            x[i]*=-1
        }

        if(y[i]<0){
            y[i]*=-1
        }
    }
var r = x[0] * y[0] + x[1] * y[1] + x[2] * y[2] + x[3] * y[3] + x[4] * y[4];
var p2_resultado = 'El valor del vector es: ' + r
document.getElementById("p2-output").innerHTML = p2_resultado

}

//problema 3

function problema3(){
    //definir un alfabeto
    var alfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 
    'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'V', 'W', 'X', 'Y', 'Z'];

    //Obtener la cadena del input y separar por comas

    var p3_input = document.querySelector('#p3-input').value;

    var p3_palabras = p3_input.split(',');

    //eliminar el espacio que hay entre cada palabra
    p3_palabras = p3_palabras.map(function (palabra){
        return palabra.replace(/\s/g, '').toUpperCase();
    });

    //calculas los caracteres unicos de cada palabra

    var p3_res = '';

    //iterar en cada palabra

    p3_palabras.forEach(function (palabra, i){
        //separas las palabras en un array para leer cada letra
        var letras_unicas = [];
        var palabra_array = palabra.split('');
        //iterar al alfabeto
        alfabeto.forEach(function(letra, j){
            //iterar por palabra
            palabra_array.forEach(function(letra_palabra, k){
                //comprobar que la letra esta dentro del alfabeto
                if(letra_palabra == letra){
                    //si la letra no la hemos contado, la egregamos a un array
                    //para contar las letras unicas
                    if(letras_unicas.indexOf(letra) < 0){
                        letras_unicas.push(letra)
                    }
                }
            });

        });
        p3_res += 'Palabra: ' + palabra + ' = ' + letras_unicas.length + '\n';
    });  

    document.querySelector('#p3-output').textContent = p3_res;

}