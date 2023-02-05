self.onmessage = ({data}) => {
    if (data === 'finish') {
        self.close();
    } else {
        let fibonacciCal = Number.parseInt(fibonacci(data.data));
        self.postMessage(fibonacciCal);
    }
}

function fibonacci(number) {
    return number < 1 ? 0 : number <= 2 ? 1 : fibonacci(number - 1) + fibonacci(number - 2);
}