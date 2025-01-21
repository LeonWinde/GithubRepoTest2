const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const paragraph = document.getElementById("paragraph");
const titel = document.getElementById("titel");
const image = document.getElementById("image");
const information = [
  {
    titel: "Wale",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_ZID5maG5NwNY7MlQojiunQKhZTdkkBj2-D0fl5xwFrQUNXCYjrN5qmOwORNY5SKlzf8QK6fh6r2gUn5xWQ_SQ",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, corporis?",
  },
  {
    titel: "Wale2",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Southern_right_whale.jpg",
    paragraph:
      "Whales are fully aquatic, open-ocean animals: they can feed, mate, give birth, suckle and raise their young at sea.",
  },
];
currentIndex = 0;
leftButton.addEventListener("click", previousSlide);
rightButton.addEventListener("click", nextSlide);

function nextSlide() {
  if (currentIndex < information.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  titel.innerText = information[currentIndex].titel;
  image.src = information[currentIndex].image;
  paragraph.innerText = information[currentIndex].paragraph;
}
function previousSlide() {
  if (currentIndex !== 0) {
    currentIndex--;
  } else {
    currentIndex = information.length - 1;
  }
  titel.innerText = information[currentIndex].titel;
  image.src = information[currentIndex].image;
  paragraph.innerText = information[currentIndex].paragraph;
}
