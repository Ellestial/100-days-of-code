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
    // ES: first attempt, but can use event listener as defined by Wes Bos instead
    // .then(createCanvas())
    .catch(function() {
        console.error('Video did not load.');
    });
};

// ES: first attempt, but can use event listener as defined by Wes Bos instead
// function createCanvas() {
//     const checkVideo = setInterval(function() {
//         if(video.videoWidth > 0) {
//             setCanvas();
//             clearInterval(checkVideo);
//         }
//     }, 500);
// }

function setCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
    //ctx.globalAlpha = 0.2;

    setInterval(function() {
        ctx.drawImage(video, 0, 0, width, height);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        allRed(imageData);
        //photoEffect(imageData);
        //greenScreen(imageData);
    }, 16);
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

function allRed(img) {
    const data = img.data;
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = 200;     // red
      data[i + 1] = data[i + 1]; // green
      data[i + 2] = data[i + 2]; // blue
    }
    ctx.putImageData(img, 0, 0);
}

function photoEffect(img) {
    const data = img.data;
    const offset = 32;
    for (var i = 0; i < data.length; i += 4) {
      data[i]     = data[i + (offset * 6)];     // red
      data[i + 1] = data[i + 1 + (offset * 4)]; // green
      data[i + 2] = data[i + 2 + (offset * 2)]; // blue
    }
    ctx.putImageData(img, 0, 0);
}

function greenScreen(img) {
    const data = img.data;
    const rmin = document.querySelector('input[name="rmin"]').value;
    const rmax = document.querySelector('input[name="rmax"]').value;
    const gmin = document.querySelector('input[name="gmin"]').value;
    const gmax = document.querySelector('input[name="gmax"]').value;
    const bmin = document.querySelector('input[name="bmin"]').value;
    const bmax = document.querySelector('input[name="bmax"]').value;
    for (var i = 0; i < data.length; i += 4) {
        if(data[i] >= rmin && data[i] <= rmax) {
            data[i + 3] = 0;
        }
        if(data[i + 1] >= gmin && data[i] <= gmax) {
            data[i + 3] = 0;
        }
        if(data[i + 2] >= bmin && data[i] <= bmax) {
            data[i + 3] = 0;
        }
    }
    ctx.putImageData(img, 0, 0);
}

getVideo();
video.addEventListener('canplay', setCanvas);