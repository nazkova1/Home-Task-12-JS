const getDomElelment = selector => document.querySelector(selector);
const wrap = getDomElelment('.mainBox')
const reds = getDomElelment('.red')
const yellows = getDomElelment('.yellow')
const greens = getDomElelment('.green')
const blues = getDomElelment('.blue')
const oranges = getDomElelment('.orange')
const greys = getDomElelment('.grey')


reds.onclick = function () {
    reds.style.color = "red";
    reds.ondblclick = function () {
        reds.style.color = "black";
    }
}
yellows.onclick = function () {
    yellows.style.color = "yellow";
    yellows.ondblclick = function () {
        yellows.style.color = "black";
    }
}
greens.onclick = function () {
    greens.style.color = "green";
    greens.ondblclick = function () {
        greens.style.color = "black";
    }
}
blues.onclick = function () {
    blues.style.color = "blue";
    blues.ondblclick = function () {
        blues.style.color = "black";
    }
}
oranges.onclick = function () {
    oranges.style.color = "orange";
    oranges.ondblclick = function () {
        oranges.style.color = "black";
    }
}
greys.onclick = function () {
    greys.style.color = "grey";
    greys.ondblclick = function () {
        greys.style.color = "black";
    }
}