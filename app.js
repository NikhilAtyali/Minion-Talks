const btnTranslator = document.querySelector("#translate-Button");
const textInput = document.querySelector("#txtInput");
const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/minion.json";

const getTransalationURL =(input)=>{
    return serverURL + "?" + "text=" + input;
}

const errorHandeler =(error)=>{
    console.log("Error occuered", error);
    alert("Something went wrong with the server!")
}

const clickHandeler =()=>{
    const inputText = textInput.value;
    console.log("Clicked")
    fetch(getTransalationURL(inputText))
    .then(response=> response.json())
    .then(json=>{
        const translatedText = json.contents.translated
        output.innerHTML = translatedText;
    })
    .catch(errorHandeler);
}

btnTranslator.addEventListener("click", clickHandeler);