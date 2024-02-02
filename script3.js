window.onload = () =>{
    main();
}

function main(){
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');

    changeBtn.addEventListener('click', function(){
        const bgColor = generateHexColor ()
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });

    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(output.value);
        generateToastMessage('${output.value} copied');
    });
}

function generateHexColor() {
    const red = Math.floor(Math.random () * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function generateToastMessage(msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.className = 'toast-message toast-animation-in';

    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in');
        
    })

    document.body.appendChild(div);
}