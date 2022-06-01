const myElement = document.getElementsByTagName("body")[0];

let shouldRun = false

let interval;
document.getElementById("switch").addEventListener("click", (event) => {
    if (shouldRun) {
        shouldRun = false
        clearInterval(interval)
        clearStyles(myElement)
    } else {
        shouldRun = true
        interval = setInterval(() => {
            randomStyles(myElement);
            forChildren(myElement);
        }, 1000)
    }
})

//iteraation throught every element in dom 
function forChildren(element) {
    if (element.children.length === 0) {
        return;
    }

    for (let i = 0; i < element.children.length; i++) {
        const child = element.children[i];
        forChildren(child);
        randomStyles(child);
    }
}

//for on and of switch
function clearStyles(element) {
    element.style.transform = "translate(0,0)";
    element.style.boxShadow = "";
    element.style.backgroundColor = "";


    if (element.children.length === 0) {
        return;
    }

    for (let i = 0; i < element.children.length; i++) {
        const child = element.children[i];
        clearStyles(child);
    }
}

function randomStyles(element) {

    //uichanges here
    element.style.backgroundColor = `rgb(${clr()},${clr()},${clr()})`;

    element.style.transition = "all 1s linear";

    if (element.id === "scoreLabel") {
        return
    }
    element.style.transform = `translate(${trnslt()}px,${trnslt()}px)`;
    //element.style.borderRadius = random(50) + "%"
    if (random(2) === 1) {
        element.style.boxShadow = `${random(5)}px ${random(5)}px ${random(5)}px rgb(${clr()},${clr()},${clr()})`
    }

}

function trnslt() {
    return random(100) - 50
}

function random(max) {
    return Math.floor(Math.random() * max);
}

function clr() {
    return Math.floor(Math.random() * 255);
}
