const page = {
    default: function (){
        const fUsername = document.querySelector("#fUsername");
        const divOutput = document.getElementById("ouput");
        const childPara = document.createElement("p");
        childPara.innerHTML = "Hello " + fUsername.value;
        divOutput.appendChild(childPara);
        console.log(fUsername.value);
    },
    init: function() {
        console.log("Page loaded!");
        const fClickMeButton = document.getElementById("clickMeButton");
        fClickMeButton.addEventListener("click", page.default());
        console.log("Done initializing!");
    }
}

window.addEventListener("load", page.init());