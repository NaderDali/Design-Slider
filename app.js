let nextDom= document.getElementById('next');
let prevDom= document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listitemDom = document.querySelector('.carousel .list');
let thumbnail =document.querySelector('.carousel .thumbnail');
nextDom.onclick =function(){
    showSlider('next');
}


let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun= setTimeout(()=>{
    nextDom.click();

}, timeAutoNext);
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail =document.querySelectorAll('.carousel .thumbnail .item');
    if(tpye==='next'){
        listitemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
    }
    else{
        let positionLastItem = itemSlider.length-1;
        listitemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        carouselDom.classList.add('prev');

    }

clearTimeout(runTimeOut);
runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
}, timeRunning)
clearTimeout(runAutoRun);

}