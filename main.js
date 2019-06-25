function startNonBlockingAction() {
    const worker = new Worker("./worker.js")
    worker.postMessage('start');
    worker.onmessage = (e) => {
        document.querySelector("#script-message").textContent = e.data;
        worker.terminate();
    }
}

function startBlockingAction() {
    const message = whileBlocker("Finished from main thread.");
    document.querySelector("#script-message").textContent = message
}

let stopper = false;
let spinStopper = false;

function resetCounter() {
    stopper = true
    document.querySelector("#counter").textContent = 0;
    document.querySelector("#script-message").textContent = "Waiting for message"
}

function startCounter() {
    if (stopper) {
        stopper = false;
        return;
    }
    const counter = document.querySelector("#counter");
    const number = parseInt(counter.textContent)
    counter.textContent = number + 1;
    window.requestAnimationFrame(startCounter)
}

function startSpinner() {
    if (spinStopper) {
        spinStopper = false;
        return;
    }
    const spinner = document.querySelector("#spinner");
    let degree = spinner.style.transform ? parseInt(spinner.style.transform.match(/\d+/g)[0]) : 0;
    degree = degree + 6;
    spinner.style.transform = `rotate(${degree}deg)`;
    window.requestAnimationFrame(startSpinner)
}

function resetSpinner() {
    spinStopper = true;
    const spinner = document.querySelector("#spinner");
    spinner.style.transform = null;
}

function startCSSSpinner() {
    const spinner = document.querySelector("#CSSSpinner");
    spinner.setAttribute("class", "spin spinner")
}
function resetCSSSpinner() {
    const spinner = document.querySelector("#CSSSpinner");
    spinner.setAttribute("class", "spinner")
}