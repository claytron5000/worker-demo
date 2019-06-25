importScripts("./whileBlocker.js");

self.addEventListener('message', function (e) {
    const message = whileBlocker("Finished from worker thread");
    postMessage(message);
    self.close()
}, false);
