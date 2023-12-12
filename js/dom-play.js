function highlightActor(actor) {

    const spans = document.querySelectorAll("div#play span");

    for (const mySpan of spans) {
        if (mySpan.dataset.actor == actor) {
            mySpan.style.backgroundColor = 'green';
        } else {
            mySpan.style.backgroundColor = '';
        }
    }
}

const spans = document.querySelectorAll("div#play span");
// console.log(spans);

for (const mySpan of spans) {
    mySpan.addEventListener("click", function (ev) {
        highlightActor(mySpan.dataset.actor);
    });
}