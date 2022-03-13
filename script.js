let start = document.querySelector('#start');
let lang = document.querySelector('#lang');
let result = document.querySelector('#result');
let recognition = new webkitSpeechRecognition() || new SpeechRecognition();
lang.addEventListener('change', (e) => {
    recognition.lang = e.target.value;
});

recognition.interimResults = true;

start.addEventListener('click', () => {
    recognition.start();
});
recognition.addEventListener('audiostart', (e) => {
    start.innerHTML = 'Listening...';
});

//recognition results
recognition.addEventListener('result', (e) => {
    let text = "";
    let i = 0;
    while(i < e.results.length) {
        text += e.results[i][0].transcript;
        i++;
    };
    result.innerHTML = text;
});
recognition.addEventListener('audioend', (e) => {
    start.innerHTML = 'Start';
});