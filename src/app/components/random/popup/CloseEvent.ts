
function subscribeClose(eventName:string, listener: EventListenerOrEventListenerObject) {
    document.addEventListener(eventName, listener);
}

function unsubscribe(eventName:string, listener:EventListenerOrEventListenerObject) {
    document.removeEventListener(eventName, listener);
}

function publishCloseEvent(eventName:string) {
    const event = new CustomEvent(eventName, {});
    document.dispatchEvent(event);
}

export { publishCloseEvent, subscribeClose, unsubscribe};