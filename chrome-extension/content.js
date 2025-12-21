function injectButton(){
    const existingButton = document.querySelector(".ai_reply_button")
    if(existingButton) existingButton.remove();

    const toolbar = findComposeToolbar();
    if(!toolbar){
        console.log("Toolbar not found");
        return;
    }
    console.log("Toolbar found")
}
const observer = new MutationObserver(mutations => {
    for(const mutation of mutations){
        const addedNodes = Array.from(mutation.addedNodes);
        const hasComposeElement = addedNodes.some(node =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node.matches('.aDh, .btC, [role="dialog"]')) || node.querySelector('.aDh, .btC, [role="dialog"]')
    );

    if(hasComposeElement) {
        console.log("Compose Window Detector")
        setTimeout(injectButton, 500);
    }
    }
}

);

observer.observe(document.body, {
    childList: true,
    subtree: true
})