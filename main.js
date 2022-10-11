let btn;
let email;
let password;
email=document.getElementById("email");
password=document.getElementById("contraseña");
btn=document.getElementById("btn-ingresar");
console.log(email);
function myfunction(){

    if (email.value=='' || password.value=='') {
        alert("debes llenar todos los campos");
        return false;
        
    } else if(email.value==="diegoubillaramos@gmail.com" && password.value==="123") {
        alert("inicio exitoso");
        return true;
        
    }else{
        alert("datos incorrectos");
        return false;
    }
}




