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
    }, 16);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    imageData.data = [255, 255, 255];
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData);
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
