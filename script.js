function darBono(){

    let nombre=document.getElementById("nombre").value;
    let usuario=document.getElementById("usuario").value;
    let contrasena=document.getElementById("contrasena").value;
    let residencia=document.getElementById("residencia").value;
    let telefono=document.getElementById("telefono").value;
    let edad=document.getElementById("edad").value;

    if(
        nombre==="" ||
        usuario==="" ||
        contrasena==="" ||
        residencia==="" ||
        telefono==="" ||
        edad===""

    ){

        document.getElementById("mensaje").innerHTML="⚠️ Debes completar todos los campos.";
        return;

    }

    edad=Number(edad);

    if(edad<18){

        document.getElementById("mensaje").innerHTML="❌ No puedes registrarte porque eres menor de edad.";

    }

    else if(edad>=18 && edad<=25){

        document.getElementById("mensaje").innerHTML="✅ Registro exitoso.<br><br>🎁 ¡Has ganado un bono de <strong>$100.000</strong>!";

    }

    else{

        document.getElementById("mensaje").innerHTML="✅ Registro exitoso.<br><br>🎁 ¡Has ganado un bono de <strong>$150.000</strong>!";

    }

}