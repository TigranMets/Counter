var counter = document.getElementById('klir');
var followers = document.querySelector('.followers');

let count = 1;

setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerText = count;
    }
}, 1)

setTimeout(() => {
    followers.innerHTML = 'Followers in Github';
}, 4000);