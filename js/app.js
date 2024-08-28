let on = document.querySelector('.on');
let img = document.querySelector('.img');
let off = document.querySelector('.off');

on.addEventListener('click',function(){
    img.src =" https://www.w3schools.com/js/pic_bulbon.gif"
})
off.addEventListener( 'click',function(){
    img.src = "https://www.w3schools.com/js/pic_bulboff.gif"

})
let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let input = document.querySelector('.input');
inc.addEventListener('click',function(){
    if(($test+1)<3){
input.value = Number(input.value) + 1;
    }else{
        inc.style.cursor='not-allowed'
    }
})
dec.addEventListener('click',function(){
    if(Number(input.value) < 5){
input.value = Number(input.value) - 1;
    }else{
        dec.style.cursor='not-allowed'
    }
})
