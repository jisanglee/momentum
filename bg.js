const body = document.querySelector("body");
const IMG_NUMBER = 3;

function handleImgLoad(){
    console.log('finished loading image');
}
function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    //image.addEventListener("loadend",handleImgLoad); //api를 쓴다면 이렇게씀. 지금은 ㄴ
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER); //random>>0이상 1미만 난수. floor 내림 ceil 올림. 
    return number;
}

function init(){
    const randomNumber =  genRandom();
    paintImage(randomNumber);
}

init();