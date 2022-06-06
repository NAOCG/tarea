const  formulario  =  document.getElementById('formulario');
const  inputs  =  document.querySelectorAll ( '#formulario input' ) ;

const  expresiones  =  {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password :  /^.{8}$/, // 8 dígitos.
    telefono : /^\d{7,10}$/  // 7 a 10 numeros.
}
const campos = {
    nombre: false,
    telefono: false,
    password: false
}
const validarFormulario = (e) => {
    switch (e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre'); 
        break;

        case "telefono":
        validarCampo(expresiones.telefono, e.target, 'telefono');
        break;

        case "password":
        validarCampo(expresiones.password, e.target, 'password');
        break;
    }
}
const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-cicle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-cicle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`) .classList.add('formulario__input-error-activo');
        campos[campo] = false;
    } 
}

inputs.forEach((input) => {
    input.addEventListener('keyup' , validarFormulario);
    input.addEventListener('blur' , validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const generoF = document.querySelector("#generoF");
    const intereses1 = document.querySelector("#intereses");
    const intereses2 = document.querySelector("#intereses2");
    const intereses3 = document.querySelector("#intereses3");
    var genero;
    var interes = "";
    if(generoF.checked == true){
        genero = "Femenino";
    } else {
        genero = "Masculino";
    }
    if(intereses1.checked == true){
        interes = interes + "Libros"
    }
    if(intereses2.checked == true){
        interes = interes + " Peliculas"
    }
    if(intereses3.checked == true){
        interes = interes + " Videojuegos"
    }
   document.write("Datos ingresados: <br>Nombre: "+document.getElementById("nombre").value +"<br>Teléfono: "+document.getElementById("telefono").value+"<br>Género: "+genero+"<br>Intereses: "+interes);

    const intereses = document.getElementById('intereses');
    if(campos.nombre && campos.telefono && campo.password){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() =>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
        } else {
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
});