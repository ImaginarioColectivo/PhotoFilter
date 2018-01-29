'use strict'

const blurSelect = document.getElementById('blurSelect');
const brightnessSelect = document.getElementById('brightnessSelect');
const contrastSelect = document.getElementById('contrastSelect');
const dropShadowSelect = document.getElementById('dropShadowSelect');


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