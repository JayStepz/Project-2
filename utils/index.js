 


function logIn (show) {
    var show = document.getElementById('show');
    var hide = document.getElementById('hide');
    show.style.display = (show.style.display == 'block') ? 'none' : 'block';
    hide.style.display = (hide.style.display == 'none') ? 'none' : 'block';
    }

function signUp (hide) {
    var show = document.getElementById('show');
    var hide = document.getElementById('hide');
    hide.style.display = (hide.style.display == 'block') ? 'none' : 'block';
    show.style.display = (show.style.display == 'none') ? 'none' : 'block';
}

document.getElementById('sign').addEventListener('click',signUp);
document.getElementById('logIn').addEventListener('click',logIn);
document.getElementById('sign').addEventListener('click',logIn);
document.getElementById('logIn').addEventListener('click',signUp);