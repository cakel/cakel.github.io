const images =[
"0.jpg",
"1.jpg",
"2.jpg",
"3.jpg",
"4.jpg",
"5.jpg",
"6.jpg",
"7.jpg",
"8.jpg",
"9.jpg",
"10.jpg",
"11.jpg",
"12.jpg",
"13.jpg",
"14.jpg",
"15.jpg",
"16.jpg",
"17.jpg",
"18.jpg",
"19.jpg",
"20.jpg",
"21.jpg",
"22.jpg",
"23.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundBlendMode = "overlay";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.height = "97.6vh";
document.body.style.width = "none";
