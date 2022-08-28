
var userInput = document.getElementById("input-text");

var translate = document.getElementById("text-translate");

var output = document.getElementById("output-text");




var serverURL = "https://api.funtranslations.com/translate/groot.json";

function errorHandler(error){
    console.log("error ocurred",error);
    alert("Something wrong with server try again after sometime");
}


function getTranslatedURL(text){

    return serverURL + "?" + "text" + "=" + text;
}



function clickEventHandler(){

    var input = userInput.value;

    fetch(getTranslatedURL(input)).then(response => response.json()).then(json => {

        var translatedText = json.contents.translated;

        output = translatedText;
        
    }).catch(errorHandler);
}


translate.addEventListener("click",clickEventHandler);