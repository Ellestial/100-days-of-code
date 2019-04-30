const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(MediaStream) {
        video.srcObject = MediaStream;
        video.play();
    })
    .then(createCanvas())
    .catch(function() {
        console.error('Video did not load.');
    });
};

function createCanvas() {
    const checkVideo = setInterval(function() {
        if(video.videoWidth > 0) {
            setCanvas();
            clearInterval(checkVideo);
        }
    }, 500);
}

function setCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    setInterval(function() {
        ctx.drawImage(video, 0, 0, width, height);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        //allRed(imageData);
        greenScreen(imageData);
    }, 16);
}

function allRed(img) {
    const data = img.data;
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 200;     // red
      data[i + 1] = data[i + 1]; // green
      data[i + 2] = data[i + 2]; // blue
    }
    ctx.putImageData(img, 0, 0);
}

function greenScreen(img) {
    const data = img.data;
    for (var i = 0; i < data.length; i += 4) {
        if(data[i] > 100) {
            data[i] = 255;
        }
        if(data[i + 1] > 100) {
            data[i + 1] = 255;
        }
        if(data[i + 2] > 100) {
            data[i + 2] = 255;
        }
    }
    ctx.putImageData(img, 0, 0);
}

function photoEffect(img) {
    const data = img.data;
    const rmin = document.querySelector('input[name="rmin"]');
    const rmax = document.querySelector('input[name="rmax"]');
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = Math.floor((Number(rmax.value) - Number(rmin.value)));     // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(img, 0, 0);
}

function takePhoto() {
    const newImg = document.createElement('img');
    const newA = document.createElement('a');
    newA.setAttribute('download', '');
    newA.href = canvas.toDataURL();
    newImg.src = canvas.toDataURL();
    newA.appendChild(newImg);
    strip.appendChild(newA);
}

getVideo();
