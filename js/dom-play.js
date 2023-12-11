// document.querySelector(".hamlet").style.backgroundColor = "orange";

function highlight(el) {

    if (el.style.backgroundColor == '') {
        el.style.backgroundColor = 'green';
    } else {
        el.style.backgroundColor = '';  
    }
}
