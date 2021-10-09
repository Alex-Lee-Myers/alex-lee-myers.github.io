const element = document.getElementById("sendButton");
const animate = new mdb.Animate(element, {
    animation: "tada",
    animationStart: "onClick",
    animationDelay: "0",
    animationDuration: "500",
    animationReverse: "false",
    animationRepeat: "false",
    animationInterval: "0",
});
animate.init();