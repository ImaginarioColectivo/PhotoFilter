'use strict'

const blur = document.getElementById('blurSelect');
const brightness = document.getElementById('brightnessSelect');
const contrast = document.getElementById('contrastSelect');
const dropShadow = document.getElementById('dropShadowSelect');
const grayscale = document.getElementById('grayscaleSelect');
const hueRotate = document.getElementById('hueRotateSelect');
const invert = document.getElementById('invertSelect');
const opacity = document.getElementById('opacitySelect');
const saturate = document.getElementById('saturateSelect');
const sepia = document.getElementById('sepiaSelect');
const photofilter = document.getElementById('photofilterSelect');
const none = document.getElementById('noneSelect');

blurSelect.addEventListener('click', function(){
document.getElementById('blur').style.filter = 'blur(2px)';
// Code for Safari 6.0 - 9.0
document.getElementById('blur').style.WebkitFilter = 'blur(2px)';
});

brightnessSelect.addEventListener('click', function(){
document.getElementById('brightness').style.filter = 'brightness(190%)';
// Code for Safari 6.0 - 9.0
document.getElementById('brightness').style.WebkitFilter = 'brightness(190%)';
});

contrastSelect.addEventListener('click', function(){
document.getElementById('contrast').style.filter = 'contrast(300%)';
// Code for Safari 6.0 - 9.0
document.getElementById('contrast').style.WebkitFilter = 'contrast(300%)';
});

dropShadowSelect.addEventListener('click', function(){
document.getElementById('drop-shadow').style.filter = 'drop-shadow(10px 8px 20px red)';
// Code for Safari 6.0 - 9.0
document.getElementById('drop-shadow').style.WebkitFilter = 'drop-shadow(10px 8px 20px red)';
});

grayscaleSelect.addEventListener('click', function(){
document.getElementById('grayscale').style.filter = 'grayscale(100%)';
// Code for Safari 6.0 - 9.0
document.getElementById('grayscale').style.WebkitFilter = 'grayscale(100%)';
});

hueRotateSelect.addEventListener('click', function(){
document.getElementById('hue-rotate').style.filter = 'hue-rotate(90deg)';
// Code for Safari 6.0 - 9.0
document.getElementById('hue-rotate').style.WebkitFilter = 'hue-rotate(90deg)';
});

invertSelect.addEventListener('click', function(){
document.getElementById('invert').style.filter = 'invert(100%)';
// Code for Safari 6.0 - 9.0
document.getElementById('invert').style.WebkitFilter = 'invert(100%)';
});

opacitySelect.addEventListener('click', function(){
document.getElementById('opacity').style.filter = 'opacity(30%)';
// Code for Safari 6.0 - 9.0
document.getElementById('opacity').style.WebkitFilter = 'opacity(30%)';
});

saturateSelect.addEventListener('click', function(){
  document.getElementById('saturate').style.filter = 'saturate(8)';
  document.getElementById('saturate').style.WebkitFilter = 'saturate(8)';
});

sepiaSelect.addEventListener('click', function(){
  document.getElementById('sepia').style.filter = 'sepia(100%)';
  document.getElementById('sepia').style.WebkitFilter = 'sepia(100%)';
});

photofilterSelect.addEventListener('click', function(){
  document.getElementById('photofilter').style.filter = 'hue-rotate(270deg)';
  document.getElementById('photofilter').style.WebkitFilter = 'hue-rotate(270deg)';
});

noneSelect.addEventListener('click', function(){
  document.getElementById('none').style.filter = 'none';
  document.getElementById('none').style.WebkitFilter = 'none';
});

