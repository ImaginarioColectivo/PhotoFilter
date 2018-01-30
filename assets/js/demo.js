`use strict`

const blur = document.getElementById('blur');
const sepia = document.getElementById('sepia');
const opacity = document.getElementById('opacity');
const contrast = document.getElementById('contrast');
const hueRotate = document.getElementById('hue-rotate');
const dropShadow = document.getElementById('drop-shadow');
const none = document.getElementById('none');
const invert = document.getElementById('invert');
const saturate = document.getElementById('saturate');
const graysacale = document.getElementById('grayscale');
const brightness = document.getElementById('brightness');
const photofilter = document.getElementById('photofilter');
const filter = document.getElementById('filtro');

blur.addEventListener('click', function(event){
  filter.style.filter = "blur(5px)";
  filter.style.WebkitFilter = "blur(5px)";
  
});
sepia.addEventListener('click', function(fil){
  filter.style.filter = "sepia(100%)";
  filter.style.WebkitFilter = "sepia(100%)";
});
opacity.addEventListener('click', function(){
  filter.style.filter = "opacity(50%)";
  filter.style.WebkitFilter = "opacity(50%)";
})
contrast.addEventListener('click', function(){
  filter.style.filter = "contrast(200%)";
  filter.style.WebkitFilter = "contrast(200%)";
})
hueRotate.addEventListener('click', function(){
  filter.style.filter = "hue-rotate(90deg)";
  filter.style.WebkitFilter = "hue-rotate(90deg)";
})
dropShadow.addEventListener('click', function(){
  filter.style.filter = "drop-shadow(8px 8px 10px gray)";
  filter.style.WebkitFilter = "drop-shadow(8px 8px 10px teal)";
})
none.addEventListener('click', function(){
  filter.style.filter = "none";
  filter.style.WebkitFilter = "none";
})
invert.addEventListener('click', function(){
  filter.style.filter = "invert(100%)";
  filter.style.WebkitFilter = "invert(100%)";
})
saturate.addEventListener('click', function(){
  filter.style.filter = "saturate(8)";
  filter.style.WebkitFilter = "saturate(8)";
})
grayscale.addEventListener('click', function(){
  filter.style.filter = "grayscale(100%)";
  filter.style.WebkitFilter = "grayscale(100%)";
})
brightness.addEventListener('click', function(){
  filter.style.filter = "brightness(200%)";
  filter.style.WebkitFilter = "brightness(200%)";
})
photofilter.addEventListener('click', function(){
  filter.style.filter = "hue-rotate(270deg)";
  filter.style.WebkitFilter = "hue-rotate(270deg)";
})

