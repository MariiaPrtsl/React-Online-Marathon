let worker = new Worker('worker.js');

worker.onmessage = (data) => {
    const result = document.getElementById("result");
    result.innerText = `Result: ${data.data}`;
}

function calculate() {
    const number = document.getElementById("inputNumber");
    const inputNumber = Number.parseInt(number.value);

const result = document.getElementById("result");
result.innerText = "Calculating...";
    worker.postMessage({data: inputNumber});

}

