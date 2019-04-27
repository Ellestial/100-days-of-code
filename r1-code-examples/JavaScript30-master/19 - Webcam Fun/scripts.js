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
    .catch(function() {
        console.error('Video did not load.');
    });
};

function createCanvas() {
    console.dir(ctx);
}

getVideo();
createCanvas();