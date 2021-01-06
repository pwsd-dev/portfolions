// scroll up
let arrowTop = document.querySelector('.btn-scrollTop');

let t = 0;
function scrollUp() {
    let top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, ((top + 100) / -10));
        t = setTimeout('scrollUp()', 20);
    } else clearTimeout(t);
    return false;
}

arrowTop.onclick = function () {
    scrollUp();
    
};


window.addEventListener('scroll', function () {
    arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);

    if (pageYOffset < document.documentElement.clientHeight) {
        arrowTop.style.opacity = 0
    } else {
        arrowTop.style.opacity = 1;
    }
});