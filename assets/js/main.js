const selectProduct = document.querySelectorAll('.select-product');
const picColor = document.querySelectorAll('.sizeSmall');
let mainImage = document.querySelector('.main-image');
console.log(mainImage);


function activeLink(){
    selectProduct.forEach((item=>
        item.classList.remove('active')
    ))
    this.classList.add('active');
}

selectProduct.forEach((item)=>
item.addEventListener('click',activeLink)
)


function pickColor(){
    picColor.forEach((item=>
        item.classList.remove('select-color')
    ))
    this.classList.add('select-color');
}

picColor.forEach((item)=>
item.addEventListener('click',pickColor)
)



function imgClick(imageUrl){
    mainImage.src =imageUrl;   
}













