function blocker(message) {
    const endTime = Date.now() + 2000;
    while (Date.now() < endTime) {
        console.log("running on main thread")
    }
    return message;

}