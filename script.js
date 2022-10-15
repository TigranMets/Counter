let count = 1;

setInterval(() => {
    if (count < 1000) {
        count++;
        document.getElementById('count').innerText = count;
    }
}, 10);

setTimeout(() => {
    document.getElementById('followers').innerText = 'Followers in Github';
}, 11100);