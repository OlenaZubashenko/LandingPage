let modal = document.getElementById('form');
let btn = document.getElementById('btnForm');
let close = document.getElementById('close');
let signIn = document.getElementById('signIn');


btn.onclick = function() {
    modal.style.display = 'flex';
}

close.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

signIn.onclick = function() {
    modal.style.display = 'none';
}


