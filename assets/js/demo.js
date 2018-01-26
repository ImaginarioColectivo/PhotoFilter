`use strict`

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
        //crear imagen
        document.getElementById("list").innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
      };
    })(f);
    reader.readAsDataURL(f);
  }
}
document.getElementById('files').addEventListener('change', archivo, false);





