function presenca(){
    var name = document.getElementById('nome').value
    if(name == ""){
        alert('[ERRO] PARA DE SER RETARDADO E PRENCHA COM O SEU NOME')
    }else{
        alert(`Ola ${name} Sua presença foi confirmada`)
    }

}