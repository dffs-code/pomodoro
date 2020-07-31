var intervalID
var btn = document.querySelector('#btnStart')
var limit = document.querySelector('#limit')

function start() {
    if(limit.value !== ''){
        if(limit.value < 1){
            var menorQueZero = limit.value * 60;
            second.innerHTML = menorQueZero;
            minute.innerHTML = '00'
        }else if(limit.value < 10){
            minute.innerHTML = `0${limit.value}`;
        }else{
            minute.innerHTML = limit.value;
        }
    }

    intervalID = setInterval(() => {
        var seg = parseInt(document.getElementById('second').innerText);
        var min = parseInt(document.getElementById('minute').innerText);

        if (seg === 0) {
            seg = 60;
            min--;
            if(min < 10){
                minute.innerHTML = `0${min}`;
            }else{
                minute.innerHTML = min;
            }
        }
        seg--;
        if (seg < 10) {
            second.innerHTML = `0${seg}`;
        } else {
            second.innerHTML = seg;
        }

        if(min === 0 && seg === 0){
            reset()
            alert("terminou")
        }
    }, 1000)

    btn.setAttribute('disabled', 'disabled');
}

function reset(){
    second.innerHTML = '00';
    minute.innerHTML = '25';

    clearInterval(intervalID);
    btn.removeAttribute('disabled', 'disabled');
}