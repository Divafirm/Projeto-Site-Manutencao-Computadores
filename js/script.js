function loginCliente(){
    let login = formCliente.login.value
    let senha = formCliente.senha.value;
    if(login == ""){
        alert("Preencha seu ID corretamente!!!");
        formCliente.login.focus();
    }else if(login.length <= 3){
        alert("ID menor que 3 caracteres!!!");
        formCliente.login.focus();
    }else if(senha == ""){
        alert("Digite uma senha, não deixe em branco!!!");
        formCliente.senha.focus();
    }else{
        alert(`Saudações ${login}.`);
    }
}
function loginTecnico(){
    let login = formTecnico.login.value
    let senha = formTecnico.senha.value;
    if(login == ""){
        alert("Preencha seu ID corretamente!!!");
        formTecnico.login.focus();
    }else if(login.length <= 3){
        alert("ID menor que 3 caracteres!!!");
        formTecnico.login.focus();
    }else if(senha == ""){
        alert("Digite uma senha, não deixe em branco!!!");
        formTecnico.senha.focus();
    }else{
        alert(`Saudações ${login}.`);
    }
}

function enviar(){
    alert ("Dados Enviados")
}