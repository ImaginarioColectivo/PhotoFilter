`use strict`

function filters() {
  const blurSelect = document.getElementById('blur');
  const filterSelect = document.getElementById('filtro');
  if(blurSelect !== undefined) {
    filterSelect.style.filter = "blur(5px)";
  } else {
    console.log('undefined blur');
  }
  //sepia
  const sepiaSelect = document.getElementById('sepia');
  if(sepiaSelect !== undefined) {
    filterSelect.style.filter = "sepia(100%)";
  } else {
    console.log('undefined sepia');
  }
  //opacity
  const opacitySelect = document.getElementById('opacity');
  if(opacitySelect !== undefined) {
    filterSelect.style.filter = "opacity(50%)";
  } else {
    console.log('undefined ocpacity');
  }
  //contrast
  const contrastSelect = document.getElementById('contrast');
  if(contrastSelect !== undefined) {
    filterSelect.style.filter = "contrast(200%)";
  } else {
    console.log('undefined contrast');
  }
  //hue rotate
  const hueRotateSelect = document.getElementById('hue-rotate');
  if(hueRotateSelect !== undefined) {
    filterSelect.style.filter = "hue-rotate(90deg)";
  } else {
    console.log('undefined huerotate');
  }
  //drop shadow
  const dropShadowSelect = document.getElementById('drop-shadow');
  if(dropShadowSelect !== undefined) {
    filterSelect.style.filter = "drop-shadow(8px 8px 10px gray)";
  } else {
    console.log('undefined drop-shadow');
  }
  //none
  const noneSelect = document.getElementById('none');
  if(noneSelect !== undefined) {
    filterSelect.style.filter = "none";
  } else {
    console.log('undefined none');
  }
  //invert
  const invertSelect = document.getElementById('invert');
  if(invertSelect !== undefined) {
    filterSelect.style.filter = "invert(100%)";
  } else {
    console.log('undefined invert');
  }
  //saturate
  const saturateSelect = document.getElementById('saturate');
  if(saturateSelect !== undefined) {
    filterSelect.style.filter = "saturate(8)";
  } else {
    console.log('undefined saturate');
  }
  //grayscale
  const grayscaleSelect = document.getElementById('grayscale');
  if(grayscaleSelect !== undefined) {
    filterSelect.style.filter = "grayscale(100%)";
  } else {
    console.log('undefined grayscale');
  }
  //brightness
  const brightnessSelect = document.getElementById('brightness');
  if(brightnessSelect !== undefined) {
    filterSelect.style.filter = "brightness(200%)";
  } else {
    console.log('undefined brightness');
  }
  //photofilter
  const photofilterSelect = document.getElementById('photofilter');
  if(photofilterSelect !== undefined) {
    filterSelect.style.filter = "hue-rotate(270deg)";
  } else {
    console.log('undefined photofilter');
  }
};
module.exports = {
};