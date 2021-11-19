
const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX *  scaleFactor;
    const y = event.clientY *  scaleFactor
    console.log(x,y)

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const booInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booInt}px, ${y * booInt}px)`
    }
}