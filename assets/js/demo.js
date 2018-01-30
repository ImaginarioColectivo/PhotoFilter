`use strict`

const blur = document.getElementById('blurSelect');
const sepia = document.getElementById('sepiaSelect');
const opacity = document.getElementById('opacitySelect');
const contrast = document.getElementById('contrastSelect');
const hueRotate = document.getElementById('hue-rotateSelect');
const dropShadow = document.getElementById('drop-shadowSelect');
const none = document.getElementById('noneSelect');
const invert = document.getElementById('invertSelect');
const saturate = document.getElementById('saturateSelect');
const grayscale = document.getElementById('grayscaleSelect');
const brightness = document.getElementById('brightnessSelect');
const photofilter = document.getElementById('photofilterSelect');
const filter = document.getElementById('filtro');

blurSelect.addEventListener('click', function(event){
  filter.style.filter = "blur(5px)";
  filter.style.WebkitFilter = "blur(5px)"; 
});
sepiaSelect.addEventListener('click', function(fil){
  filter.style.filter = "sepia(100%)";
  filter.style.WebkitFilter = "sepia(100%)";
});
opacitySelect.addEventListener('click', function(){
  filter.style.filter = "opacity(50%)";
  filter.style.WebkitFilter = "opacity(50%)";
})
contrastSelect.addEventListener('click', function(){
  filter.style.filter = "contrast(200%)";
  filter.style.WebkitFilter = "contrast(200%)";
})
hueRotateSelect.addEventListener('click', function(){
  filter.style.filter = "hue-rotate(90deg)";
  filter.style.WebkitFilter = "hue-rotate(90deg)";
})
dropShadowSelect.addEventListener('click', function(){
  filter.style.filter = "drop-shadow(8px 8px 10px gray)";
  filter.style.WebkitFilter = "drop-shadow(8px 8px 10px teal)";
})
noneSelect.addEventListener('click', function(){
  filter.style.filter = "none";
  filter.style.WebkitFilter = "none";
})
invertSelect.addEventListener('click', function(){
  filter.style.filter = "invert(100%)";
  filter.style.WebkitFilter = "invert(100%)";
})
saturateSelect.addEventListener('click', function(){
  filter.style.filter = "saturate(8)";
  filter.style.WebkitFilter = "saturate(8)";
})
grayscaleSelect.addEventListener('click', function(){
  filter.style.filter = "grayscale(100%)";
  filter.style.WebkitFilter = "grayscale(100%)";
})
brightnessSelect.addEventListener('click', function(){
  filter.style.filter = "brightness(200%)";
  filter.style.WebkitFilter = "brightness(200%)";
})
photofilterSelect.addEventListener('click', function(){
  filter.style.filter = "hue-rotate(270deg)";
  filter.style.WebkitFilter = "hue-rotate(270deg)";
})
/*blur.addEventListener('click', function(){
var thumb = document.getElementById('blah').style.filter = "blur(5px)";
  //thumb.style.WebkitFilter = "blur(5px)";
});
invert.addEventListener('click', function(){
  var thumb = document.getElementById('blah').style.filter = "100%";
});

function archivo(evt){
  var files = evt.target.files;
  //obtener la imagen del campo
  for(var i = 0, f; f = files[i]; i++) {
    //solo admitimos imagenes
    if(!f.type.match('image.*')) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function(theFile){
      return function(e){

      var thumb = document.getElementById('blah');
        //crear imagen
        document.getElementById("list").innerHTML = ['<img id="blah" src="', e.target.result,'" title="', escape(theFile.name), ' ' + thumb + ' "/>'].join('');
      };
    })(f);
    reader.readAsDataURL(f);
  }
}
<<<<<<< HEAD
document.getElementById('files').addEventListener('change', archivo, false);




=======
document.getElementById('files').addEventListener('change', archivo, false);*/


