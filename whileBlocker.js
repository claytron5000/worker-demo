function whileBlocker(message) {
    const endTime = Date.now() + 2000;
    while (Date.now() < endTime) {
        console.log("running blocking script")
        // The message gets returned, but the loggin never stops in the worker, I'm not sure why.
        if (Date.now() > endTime) {
            break;
        }
    }
    return message;

}