const btn = document.querySelector('#btn');
const name = document.querySelector('#name');

const randomColor = () => {
    let random = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    return `rgb(${random},${random2},${random3})`;
}

btn.addEventListener('click', () => {
    let color = randomColor();
    document.body.style.backgroundColor = color;
    name.innerText = color;
})



