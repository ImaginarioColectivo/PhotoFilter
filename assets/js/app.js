'use strict'

const blur = document.getElementById('blurSelector');
const brightness = document.getElementById('brightnessSelector');
const contrast = document.getElementById('contrastSelector');
const dropShadow = document.getElementById('dropShadowSelector');
const grayscale = document.getElementById('grayscaleSelector');
const hueRotate = document.getElementById('hueRotateSelector');
const invert = document.getElementById('invertSelector');
const opacity = document.getElementById('opacitySelector');
const saturate = document.getElementById('saturateSelector');
const sepia = document.getElementById('sepiaSelector');
const photofilter = document.getElementById('photofilterSelector');
const none = document.getElementById('noneSelector');


blur.addEventListener('click', function(){
document.getElementById('blur').style.filter = 'blur(2px)';
// Code for Safari 6.0 - 9.0
document.getElementById('blur').style.WebkitFilter = 'blur(2px)';
});


brightness.addEventListener('click', function(){
document.getElementById('brightness').style.filter = 'brightness(190%)';
// Code for Safari 6.0 - 9.0
document.getElementById('brightness').style.WebkitFilter = 'brightness(190%)';
});

contrast.addEventListener('click', function(){
document.getElementById('contrast').style.filter = 'contrast(300%)';
// Code for Safari 6.0 - 9.0
document.getElementById('contrast').style.WebkitFilter = 'contrast(300%)';
});

dropShadow.addEventListener('click', function(){
document.getElementById('drop-shadow').style.filter = 'drop-shadow(10px 8px 20px red)';
// Code for Safari 6.0 - 9.0
document.getElementById('drop-shadow').style.WebkitFilter = 'drop-shadow(10px 8px 20px red)';
});

grayscale.addEventListener('click', function(){
document.getElementById('grayscale').style.filter = 'grayscale(100%)';
// Code for Safari 6.0 - 9.0
document.getElementById('grayscale').style.WebkitFilter = 'grayscale(100%)';
});

hueRotate.addEventListener('click', function(){
document.getElementById('hue-rotate').style.filter = 'hue-rotate(90deg)';
// Code for Safari 6.0 - 9.0
document.getElementById('hue-rotate').style.WebkitFilter = 'hue-rotate(90deg)';
});

invert.addEventListener('click', function(){
document.getElementById('invert').style.filter = 'invert(100%)';
// Code for Safari 6.0 - 9.0
document.getElementById('invert').style.WebkitFilter = 'invert(100%)';
});

opacity.addEventListener('click', function(){
document.getElementById('opacity').style.filter = 'opacity(30%)';
// Code for Safari 6.0 - 9.0
document.getElementById('opacity').style.WebkitFilter = 'opacity(30%)';
});

saturate.addEventListener('click', function(){
  document.getElementById('saturate').style.filter = 'saturate(8)';
  document.getElementById('saturate').style.WebkitFilter = 'saturate(8)';
});
sepia.addEventListener('click', function(){
  document.getElementById('sepia').style.filter = 'sepia(100%)';
  document.getElementById('sepia').style.WebkitFilter = 'sepia(100%)';
});
photofilter.addEventListener('click', function(){
  document.getElementById('photofilter').style.filter = 'hue-rotate(270deg)';
  document.getElementById('photofilter').style.WebkitFilter = 'hue-rotate(270deg)';
});
none.addEventListener('click', function(){
  document.getElementById('none').style.filter = 'none';
  document.getElementById('none').style.WebkitFilter = 'none';
});

