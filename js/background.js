const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
//image배열 생성 후 랜덤이미지 생성
const chosenImage = images[Math.floor(Math.random()*images.length)];
//html에 img생성
const bgImage = document.createElement("img");
//img의 src 생성
bgImage.src = `img/${chosenImage}`;
//생성한 img src를 body에 올리기, (append는 가장 뒤에, prepend는 가장 앞에)
document.body.appendChild(bgImage);