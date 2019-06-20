importScripts("./blocker.js");

self.addEventListener('message', function (e) {
    const message = blocker("Finished from worker thread");
    postMessage(message);
    self.close()
}, false);
