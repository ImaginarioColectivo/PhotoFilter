`use strict`

const blurSelect = document.getElementById('blur');
const sepiaSelect = document.getElementById('sepia');
const opacitySelect = document.getElementById('opacity');
const contrastSelect = document.getElementById('contrast');
const hueRotateSelect = document.getElementById('hue-rotate');
const dropShadowSelect = document.getElementById('drop-shadow');
const noneSelect = document.getElementById('none');
const invertSelect = document.getElementById('invert');
const saturateSelect = document.getElementById('saturate');
const grayscaleSelect = document.getElementById('grayscale');
const brightnessSelect = document.getElementById('brightness');
const photofilterSelect = document.getElementById('photofilter');
const filterSelect = document.getElementById('filtro');

blurSelect.addEventListener('click', function(){
  filterSelect.style.filter = "blur(5px)";
  filterSelect.style.WebkitFilter = "blur(5px)";
});
sepiaSelect.addEventListener('click', function(){
  filterSelect.style.filter = "sepia(100%)";
  filterSelect.style.WebkitFilter = "sepia(100%)";
});
opacitySelect.addEventListener('click', function(){
  filterSelect.style.filter = "opacity(50%)";
  filterSelect.style.WebkitFilter = "opacity(50%)";
})
contrastSelect.addEventListener('click', function(){
  filterSelect.style.filter = "contrast(200%)";
  filterSelect.style.WebkitFilter = "contrast(200%)";
})
hueRotateSelect.addEventListener('click', function(){
  filterSelect.style.filter = "hue-rotate(90deg)";
  filterSelect.style.WebkitFilter = "hue-rotate(90deg)";
})
dropShadowSelect.addEventListener('click', function(){
  filterSelect.style.filter = "drop-shadow(8px 8px 10px gray)";
  filterSelect.style.WebkitFilter = "drop-shadow(8px 8px 10px teal)";
})
noneSelect.addEventListener('click', function(){
  filterSelect.style.filter = "none";
  filterSelect.style.WebkitFilter = "none";
})
invertSelect.addEventListener('click', function(){
  filterSelect.style.filter = "invert(100%)";
  filterSelect.style.WebkitFilter = "invert(100%)";
})
saturateSelect.addEventListener('click', function(){
  filterSelect.style.filter = "saturate(8)";
  filterSelect.style.WebkitFilter = "saturate(8)";
})
grayscaleSelect.addEventListener('click', function(){
  filterSelect.style.filter = "grayscale(100%)";
  filterSelect.style.WebkitFilter = "grayscale(100%)";
})
brightnessSelect.addEventListener('click', function(){
  filterSelect.style.filter = "brightness(200%)";
  filterSelect.style.WebkitFilter = "brightness(200%)";
})
photofilterSelect.addEventListener('click', function(){
  filterSelect.style.filter = "hue-rotate(270deg)";
  filterSelect.style.WebkitFilter = "hue-rotate(270deg)";
})


