function notifyExtension(e) {
    var target = e.target;
    while ((target.tagName != "A" || !target.href) && target.parentNode) {
        target = target.parentNode;
    }
    if (target.tagName != "A")
        return;
    console.log("Content script sending message");
    browser.runtime.sendMessage({ "url": target.href });
}

window.addEventListener("click", notifyExtension);