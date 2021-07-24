const button = document.getElementById('button');

document.getElementById('height').onkeydown = function (event) {
    if(event.key != "Enter"){
        return; 
    }
    calculateIMC();
}

document.getElementById('weight').onkeydown = function (event) {
    if(event.key != "Enter"){
        return; 
    }
    calculateIMC();
}

button.addEventListener("click", function () {
    calculateIMC();
});

function calculateIMC() {
    const weight = Number(
        document.getElementById("weight").value.replace(",", ".")
    );

    const height = Number(
        document.getElementById("height").value.replace(",", ".")
    );

    const imc = weight / height ** 2;

    if (isNaN(imc)) {
        writeInHtml(`IMC Inválido`, "redResult");
        return;
    }

    let classColor = "";

    if (imc >= 40) {
        text = `Seu IMC é: ${imc.toFixed(2)} (Obesidade grave)`;
        classColor = "redResult";
    } else if (imc >= 30) {
        text = `Seu IMC é: ${imc.toFixed(2)} (Obesidade)`;
        classColor = "redResult";
    } else if (imc >= 25) {
        text = `Seu IMC é: ${imc.toFixed(2)} (Acima do peso)`;
        classColor = "redResult";
    } else if (imc >= 18.5) {
        text = `Seu IMC é: ${imc.toFixed(2)} (Normal)`;
        classColor = "greenResult";
    } else if ((imc <= 18, 5)) {
        text = `Seu IMC é: ${imc.toFixed(2)} (Magreza)`;
        classColor = "redResult";
    } else {
        text = `IMC Inválido`;
        classColor = "redResult";
    }

    writeInHtml(text, classColor);
}

function writeInHtml(text, classColor) {
    const result = document.getElementById("result");
    clearClass(result);
    result.classList.add(classColor);
    result.innerHTML = text;
}

function clearClass(element) {
    element.classList.remove("redResult");
    element.classList.remove("greenResult");
}
