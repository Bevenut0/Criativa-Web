const boxes = document.getElementsByClassName('box__servicos');


for (let box of boxes) {
    box.addEventListener('click', () => {
        const text = document.getElementById("servicos__text");
        text.style.fontSize = "18px"
        text.style.fontStyle = "italic"
        if(box == boxes[0]) {
            text.innerHTML = "Desing de Web";
        } else if(box == boxes[1]) {
            text.innerHTML = "Desing Grafico";
        } else if(box == boxes[2]) {
            text.innerHTML = "Desing de Moda";
        } else if(box == boxes[3]){
            text.innerHTML = "Desing de Luxo";
        };
    });
};