`use strict`

const blur = document.getElementById('blur');
const sepia = document.getElementById('sepia');
const opacity = document.getElementById('opacity');
const contrast = document.getElementById('contrast');
const hueRotate = document.getElementById('hue-rotate');
const dropShadow = document.getElementById('drop-shadow');
const none = [];
const invert = document.getElementById('invert');
const saturate = document.getElementById('saturate');
const graysacale = document.getElementById('grayscale');
const brightness = document.getElementById('brightness');
const photofilter = document.getElementById('photofilter');
const filter = document.getElementById('filtro');

blur.addEventListener('click', function(){
  filter.style.filter = "blur(5px)";
  filter.style.WebkitFilter = "blur(5px)";
});
sepia.addEventListener('click', function(){
  filter.style.filter = "100%";
  filter.style.WebkitFilter = "100%";
});
opacity.addEventListener('click', function(){
  filter.style.filter = "30%";
  filter.style.WebkitFilter = "30%";
})
contrast.addEventListener('click', function(){
  filter.style.filter = "200%";
  filter.style.WebkitFilter = "200%";
})
hueRotate.addEventListener('click', function(){
  filter.style.filter = "";
  filter.style.WebkitFilter = "";
})
dropShadow.addEventListener('click', function(){
  filter.style.filter = "";
  filter.style.WebkitFilter = "";
})
/*none.addEventListener('click', function(){
  filter.style.filter = "";
  filter.style.WebkitFilter = "";
})*/
invert.addEventListener('click', function(){
  filter.style.filter = "";
  filter.style.WebkitFilter = "";
})
saturate.addEventListener('click', function(){
  filter.style.filter = "";
  filter.style.WebkitFilter = "";
})
grayscale.addEventListener('click', function(){
  filter.style.filter = "";
  filter.style.WebkitFilter = "";
})
brightness.addEventListener('click', function(){
  filter.style.filter = "";
  filter.style.WebkitFilter = "";
})
photofilter.addEventListener('click', function(){
  filter.style.filter = "";
  filter.style.WebkitFilter = "";
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


