function cadastro(){
    
    var dados={
        nome:"",
        email:"",
        celular:"",
        idade:"",
    }

    dados.nome=document.getElementById("nome").value;
    dados.email=document.getElementById("email").value;
    dados.celular=document.getElementById("celular").value;
    dados.idade=document.getElementById("idade").value;

    document.getElementById("respnome").innerHTML=dados.nome;
    document.getElementById("respemail").innerHTML=dados.email;
    document.getElementById("respcell").innerHTML=dados.celular;
    document.getElementById("respidade").innerHTML=dados.idade;
}