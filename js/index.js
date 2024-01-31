let getButtonFirst = document.getElementById("button__first");
let getButtonSecond = document.getElementById("button__second__get");

getButtonFirst.addEventListener("click", (e)=>{
    let inputReceberValor = document.getElementById("input").value;
    let spanError = document.getElementById("teste");

    let validaEntrada = false;

    if(inputReceberValor == ""){
        validaEntrada;
    } else {
        validaEntrada = true;
    }

    let recebeStringCodificada = "";

    if(validaEntrada == true){

        for(i = 0; i < inputReceberValor.length; i++){
            if(inputReceberValor[i] == "a"){
                recebeStringCodificada = recebeStringCodificada + "ai";  
            } else if(inputReceberValor[i] == "e"){
                recebeStringCodificada = recebeStringCodificada + "enter"; 
            } else if(inputReceberValor[i] == "i"){
                recebeStringCodificada = recebeStringCodificada + "imes"; 
            } else if(inputReceberValor[i] == "o"){
                recebeStringCodificada = recebeStringCodificada + "ober";
            } else if (inputReceberValor[i] == "u"){
                recebeStringCodificada = recebeStringCodificada + "ufat";
            } else {
                recebeStringCodificada = recebeStringCodificada + inputReceberValor[i];
            }
        }

        let getAside = document.querySelector("aside");

        getAside.innerHTML = `
                            <img class="image__aside" src="/assets/Image - Resolvido.png" alt="Ilustração de uma pessoa confusa">
                            <p class="aside__text__first">O input criptrografado é: ${recebeStringCodificada}</p>
        `
    } else {
        spanError.classList.add("span__input__error");
        e.preventDefault();
    }
})

getButtonSecond.addEventListener("click", (e)=>{
    let inputReceberValor = document.getElementById("input").value;
    let spanError = document.getElementById("teste");

    let validaEntrada = false;

    if(inputReceberValor == ""){
        validaEntrada;
    } else {
        validaEntrada = true;
    }

    let recebeStringCodificada = "";

    if(validaEntrada == true){

        /*for(i = 0; i < inputReceberValor.length; i++){
            
        }*/

        let getAside = document.querySelector("aside");

        getAside.innerHTML = `
                            <img class="image__aside" src="/assets/Image - Resolvido.png" alt="Ilustração de uma pessoa confusa">
                            <p class="aside__text__first">O input descriptografado é: ${recebeStringCodificada}</p>
        `
    } else {
        spanError.classList.add("span__input__error");
        e.preventDefault();
    }
})





