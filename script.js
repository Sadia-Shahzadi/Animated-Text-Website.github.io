const text = document.querySelector('.sec-text');

const textLoad = () =>{
    setTimeout(() => {
        text.textContent = "Coder";
    }, 0);
    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Youtuber";
    }, 8000);
};

textLoad();
setInterval(textLoad, 12000);