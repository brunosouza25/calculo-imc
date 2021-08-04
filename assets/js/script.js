const button = document.getElementById('button');

document.getElementById('height').onkeydown = function (event) {
    if (event.key != "Enter") {
        return;
    }
    calculateIMC();
}

document.getElementById('weight').onkeydown = function (event) {
    if (event.key != "Enter") {
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
        writeResultImc(`IMC Inválido`, "redResult");
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
    } else {
        text = `Seu IMC é: ${imc.toFixed(2)} (Magreza)`;
        classColor = "redResult";
    }

    writeResultImc(text, classColor);
}

function writeResultImc(text, classColor) {
    const result = document.getElementById("result");
    clearClassResultImc(result);
    result.classList.add(classColor);
    result.innerHTML = text;
}

function clearClassResultImc(element) {
    element.classList.remove("redResult");
    element.classList.remove("greenResult");
}
