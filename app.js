var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(serverURL) {
    return serverURL + "?"+ "text=" + txtInput.value;
}

function errorHandler(error) {
    console.log("error occured",error);
    alert("something went wrong with server! please try after some time ")
}

function clickHandler() {
    fetch(getTranslationURL(serverURL))
        .then(response => response.json())
        .then(json =>{
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
            })
        .catch(errorHandler)

};

btnTranslate.addEventListener("click", clickHandler)