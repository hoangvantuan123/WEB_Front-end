 const carouselImages = document.querySelector('.carousel__images');
const carouselI = document.querySelectorAll('.fas ');
const imagesLength  = document.querySelectorAll('.carousel-list__item').length;

let imageIndex = 1 ;
let translatex = 0 ;
carouselI.forEach(i => {    i.addEventListener('click' , (e) =>{
        if (e.target.id === 'previous'){
            if (imageIndex !== 1){
                imageIndex--;
                translatex+=116;
            }
        }else {
            if( imageIndex !== imagesLength){
                imageIndex++;
                translatex -=116;
            }
        }
        carouselImages.style.transform = `translateX(${translatex}px)`;
    })
});
