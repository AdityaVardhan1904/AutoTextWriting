

const name = prompt("Kindly Type Your Name -");


let text = `Hello ${name}!! ✨✨✨`;


let index = 0;

function writeText() {
    document.body.innerHTML = text.slice(0,index);
    index++;


    if(index > text.length){
        index = 0;
    }
    function createHeart(){
        const heart = document.createElement("div");

        heart.classList.add("heart");

        heart.style.left = Math.random() * 500 + "vw";

        heart.style.animationDuration = Math.random() * 1 + 1 +"s";

        heart.innerText = "🍂";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },1000);
    }
    setInterval(createHeart,1000);
}
setInterval(writeText,200);
