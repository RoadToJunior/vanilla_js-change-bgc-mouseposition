// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNIEMY

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener("click", (e) => {
  const positionX = e.clientX;
  const positionY = e.clientY;
  let color = "red";

  console.log(positionX, positionY);
  if (positionX % 2 === 0 && positionY % 2 === 0) {
    color = "red";
  } else if (positionX % 2 !== 0 && positionY % 2 !== 0) {
    color = "blue";
  } else {
    color = "green";
  }

  document.body.style.backgroundColor = color;
});

//document.body.addEventListener('click', (e) => {

// const x = e.clientX;
// const y = e.clientY;
// // przypadek gdy oba parzyste (domyślny);
// let color = "red";

// if (x % 2 ^ y % 2) {
//     // przypadek gdy obie współrzędne mają różną parzystość
//     color = 'green';
// } else if (x % 2 && y % 2) {
//     // przypadek gdy obie współrzędne są nieparzyste
//     color = 'blue';
// }

// console.log(`"${x}, ${y}"`) //kontrola ;)
// document.body.style.backgroundColor = color;
// });

// document.body.addEventListener('click', (e) => {

//     const color = ["red", "green", "blue"];
//     const index = e.clientX % 2 + e.clientY % 2;

//     document.body.style.backgroundColor = color[index];
// });
