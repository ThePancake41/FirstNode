const page = {
    default: function (){
        const fUsername = document.querySelector("#fUsername");
        const divOutput = document.getElementById("output");
        const childPara = document.createElement("p");
        childPara.innerHTML = "Hello " + fUsername.value;
        childPara.style.color = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
        divOutput.appendChild(childPara);
        console.log(fUsername.value);
        setTimeout(function(){while (divOutput.firstChild) {divOutput.removeChild(divOutput.lastChild)}}, 6000);
    },
    convert: function (){
        const fForm = document.getElementById("Ft");
        const cForm = document.getElementById("Cls");
        if (fForm.value == 0 && cForm.value !== 0) {
            fForm.value = (cForm.value * 9/5) + 32;
        } else if (cForm.value == 0 && fForm.value !== 0) {
            cForm.value = (fForm.value - 32) * 5/9;
        } else {
            console.log("one of the feilds must be empty");
            fForm.value = null;
            cForm.value = null;
        }
        console.log(fForm.value + "|" + cForm.value);
    },
    init: function() {
        console.log("Page loaded!");
        const fClickMeButton = document.getElementById("clickMeButton");
        const convertButton = document.getElementById("converter");
        fClickMeButton.addEventListener("click", page.default);
        convertButton.addEventListener("click", page.convert);

        console.log("Done initializing!");
    }
}

window.onload = page.init;