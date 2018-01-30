'use strict'

const blurSelect = document.getElementById('blur');
const brightnessSelect = document.getElementById('brightness');
const contrastSelect = document.getElementById('contrast');
const dropShadowSelect = document.getElementById('dropShadow');
const grayscaleSelect = document.getElementById('grayscale');
const hueRotateSelect = document.getElementById('hueRotate');
const invertSelect = document.getElementById('invert');
const opacitySelect = document.getElementById('opacity');
const saturateSelect = document.getElementById('saturate');
const sepiaSelect = document.getElementById('sepia');
const photofilterSelect = document.getElementById('photofilter');
const noneSelect = document.getElementById('none');

blurSelect.addEventListener('click', function(){
document.getElementById('blurImg').style.filter = 'blur(2px)';
// Code for Safari 6.0 - 9.0
document.getElementById('blurImg').style.WebkitFilter = 'blur(2px)';
});

brightnessSelect.addEventListener('click', function(){
document.getElementById('brightnessImg').style.filter = 'brightness(190%)';
// Code for Safari 6.0 - 9.0
document.getElementById('brightnessImg').style.WebkitFilter = 'brightness(190%)';
});

contrastSelect.addEventListener('click', function(){
document.getElementById('contrastImg').style.filter = 'contrast(300%)';
// Code for Safari 6.0 - 9.0
document.getElementById('contrastImg').style.WebkitFilter = 'contrast(300%)';
});

dropShadowSelect.addEventListener('click', function(){
document.getElementById('drop-shadowImg').style.filter = 'drop-shadow(10px 8px 20px red)';
// Code for Safari 6.0 - 9.0
document.getElementById('drop-shadowImg').style.WebkitFilter = 'drop-shadow(10px 8px 20px red)';
});

grayscaleSelect.addEventListener('click', function(){
document.getElementById('grayscaleImg').style.filter = 'grayscale(100%)';
// Code for Safari 6.0 - 9.0
document.getElementById('grayscaleImg').style.WebkitFilter = 'grayscale(100%)';
});

hueRotateSelect.addEventListener('click', function(){
document.getElementById('hue-rotateImg').style.filter = 'hue-rotate(90deg)';
// Code for Safari 6.0 - 9.0
document.getElementById('hue-rotateImg').style.WebkitFilter = 'hue-rotate(90deg)';
});

invertSelect.addEventListener('click', function(){
document.getElementById('invertImg').style.filter = 'invert(100%)';
// Code for Safari 6.0 - 9.0
document.getElementById('invertImg').style.WebkitFilter = 'invert(100%)';
});

opacitySelect.addEventListener('click', function(){
document.getElementById('opacityImg').style.filter = 'opacity(30%)';
// Code for Safari 6.0 - 9.0
document.getElementById('opacityImg').style.WebkitFilter = 'opacity(30%)';
});

saturateSelect.addEventListener('click', function(){
  document.getElementById('saturateImg').style.filter = 'saturate(8)';
  document.getElementById('saturateImg').style.WebkitFilter = 'saturate(8)';
});

sepiaSelect.addEventListener('click', function(){
  document.getElementById('sepiaImg').style.filter = 'sepia(100%)';
  document.getElementById('sepiaImg').style.WebkitFilter = 'sepia(100%)';
});

photofilterSelect.addEventListener('click', function(){
  document.getElementById('photofilterImg').style.filter = 'hue-rotate(270deg)';
  document.getElementById('photofilterImg').style.WebkitFilter = 'hue-rotate(270deg)';
});

noneSelect.addEventListener('click', function(){
  document.getElementById('noneImg').style.filter = 'none';
  document.getElementById('noneImg').style.WebkitFilter = 'none';
});

