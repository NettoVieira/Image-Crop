const photoFile = document.getElementById('photo-file');
let image = document.getElementById('photo-preview');   

//select && preview image

document.getElementById('select-image').onclick = function(){
  photoFile.click();  
};

window.addEventListener('DOMContentLoaded', () => {
  photoFile.addEventListener('change', () => {
    let file = photoFile.files.item(0);
    //ler um arquivo

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(event) {
      image.src = event.target.result;
    };
  });
});

//Selection tool

const events = {
  mouseover(){
    this.style.cursor = 'crosshair'
  },
  mousedown(){},
  mousemove(){},
  mouseup(){}
};

Object.keys(events).forEach(eventName => {
  image.addEventListener(eventName, events[eventName]);
});
