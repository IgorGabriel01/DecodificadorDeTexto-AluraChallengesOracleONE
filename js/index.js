let getButtonFirst = document.getElementById("button__first");
let getButtonSecond = document.getElementById("button__second__get");

let guardar = [];

getButtonFirst.addEventListener("click", (e)=>{
    let inputReceberValor = document.getElementById("input").value.toLowerCase();
    let spanError = document.getElementById("teste");

    let validaEntrada = false;

    if(inputReceberValor == ""){
        validaEntrada;
    } else {
        validaEntrada = true;
    }

    if(validaEntrada == true){

        let recebeStringCodificada = "";

        for(i = 0; i < inputReceberValor.length; i++){
            if(inputReceberValor[i] == "a"){
                recebeStringCodificada = recebeStringCodificada + "ai";
                guardar.push("ai");
            } else if(inputReceberValor[i] == "e"){
                recebeStringCodificada = recebeStringCodificada + "enter";
                guardar.push("enter");
            } else if(inputReceberValor[i] == "i"){
                recebeStringCodificada = recebeStringCodificada + "imes";
                guardar.push("imes"); 
            } else if(inputReceberValor[i] == "o"){
                recebeStringCodificada = recebeStringCodificada + "ober";
                guardar.push("ober");
            } else if (inputReceberValor[i] == "u"){
                recebeStringCodificada = recebeStringCodificada + "ufat";
                guardar.push("ufat");
            } else {
                recebeStringCodificada = recebeStringCodificada + inputReceberValor[i];
                guardar.push(inputReceberValor[i]);
            }
        }

        let getAside = document.querySelector("aside");

        getAside.innerHTML = `
                            <img class="image__aside" src="assets/Image - Resolvido.png" alt="Ilustração de uma pessoa confusa">
                            <p class="aside__text__first">O input criptrografado é: ${recebeStringCodificada}</p>
        `
    } else {
        spanError.classList.add("span__input__error");
        e.preventDefault();
    }
})

getButtonSecond.addEventListener("click", (e)=>{
    let inputReceberValor = document.getElementById("input").value.toLowerCase();
    let spanError = document.getElementById("teste");

    let validaEntrada = false;

    if(inputReceberValor == ""){
        validaEntrada;
    } else {
        validaEntrada = true;
    }

    if(validaEntrada == true){
        
        let recebeStringDescodificada = "";

        for(j = 0; j < guardar.length; j++){
            if(guardar[j] == "ai"){
                recebeStringDescodificada = recebeStringDescodificada + "a";
            } else if(guardar[j] == "enter"){
                recebeStringDescodificada = recebeStringDescodificada + "e"; 
            } else if(guardar[j] == "imes"){
                recebeStringDescodificada = recebeStringDescodificada + "i";  
            } else if(guardar[j] == "ober"){
                recebeStringDescodificada = recebeStringDescodificada + "o";
            } else if (guardar[j] == "ufat"){
                recebeStringDescodificada = recebeStringDescodificada + "u";
            } else {
                recebeStringDescodificada = recebeStringDescodificada + guardar[j];
            }
            console.log(recebeStringDescodificada);
        }

        

        let getAside = document.querySelector("aside");

        getAside.innerHTML = `
                            <img class="image__aside" src="assets/Image - Resolvido.png" alt="Ilustração de uma pessoa confusa">
                            <p class="aside__text__first">O input descriptografado é: ${recebeStringDescodificada}</p>
        `
    } else {
        spanError.classList.add("span__input__error");
        e.preventDefault();
    }
})





