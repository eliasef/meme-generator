// requisito 1
const input = document.getElementById('text-input');
const p = document.getElementById('meme-text');
const file = document.getElementById('meme-insert');
const photo = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');

function inputForP() {
  input.addEventListener('keyup', () => {
    p.innerText = input.value;
  });
}

inputForP();

function addImg() {
  file.addEventListener('change', () => {
    const reader = new FileReader();

    reader.onload = () => {
      photo.src = reader.result;
    };
    reader.readAsDataURL(file.files[0]);
  });
}

addImg();

function fire() {
  const fireButton = document.getElementById('fire');

  fireButton.addEventListener('click', () => {
    container.style.border = '3px dashed red';
  });
}

fire();

function water() {
  const waterButton = document.getElementById('water');

  waterButton.addEventListener('click', () => {
    container.style.border = '5px double blue';
  });
}

water();

function earth() {
  const earthButton = document.getElementById('earth');

  earthButton.addEventListener('click', () => {
    container.style.border = '6px groove green';
  });
}

earth();

function addMeme1() {
  const meme1 = document.getElementById('meme-1');

  meme1.addEventListener('click', () => {
    photo.src = 'imgs/meme1.png';
    container.style.backgroundSsize = 'cover';
    container.style.backgroundPosition = 'center';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundSize = '100%';
  });
}

addMeme1();

function addMeme2() {
  const meme2 = document.getElementById('meme-2');

  meme2.addEventListener('click', () => {
    photo.src = 'imgs/meme2.png';
    container.style.backgroundSsize = 'cover';
    container.style.backgroundPosition = 'center';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundSize = '109%';
  });
}

addMeme2();

function addMeme3() {
  const meme3 = document.getElementById('meme-3');

  meme3.addEventListener('click', () => {
    photo.src = 'imgs/meme3.png';
    container.style.backgroundSsize = 'cover';
    container.style.backgroundPosition = 'center';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundSize = '118%';
  });
}

addMeme3();

function addMeme4() {
  const meme4 = document.getElementById('meme-4');

  meme4.addEventListener('click', () => {
    photo.src = 'imgs/meme4.png';
    container.style.backgroundSsize = 'cover';
    container.style.backgroundPosition = 'center';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundSize = '118%';
  });
}

addMeme4();
