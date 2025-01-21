const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const paragraph = document.getElementById("paragraph");
const titel = document.getElementById("titel");
const image = document.getElementById("image");

const information = [
  {
    titel: "Buckelwal",
    image:
      "https://images.pexels.com/photos/4666753/pexels-photo-4666753.jpeg?auto=compress&cs=tinysrgb&w=600",
    paragraph:
      "Der Buckelwal (Megaptera novaeangliae) ist ein oft in Küstennähe vorkommender Vertreter der Furchenwale. Er erreicht eine Körpergröße von 12 bis 15 Metern und hat im Vergleich zu anderen Walen deutlich größere Flipper. Bekannt sind die Tiere unter anderem aufgrund ihres Walgesangs und ihrer Lebhaftigkeit. Durch die intensive Bejagung gingen die weltweiten Bestände zeitweise bedrohlich zurück. Seit 1966 steht der Buckelwal unter weltweitem Artenschutz.",
  },
  {
    titel: "Blauwal",
    image:
      "https://media.gettyimages.com/id/639204140/de/foto/blue-whale-balaenoptera-musculus-gulf-of-california-mexico.jpg?s=612x612&w=0&k=20&c=UZyLFugHbO4lQU5BXpXOdaTU5OzwFCYpoL7X8EVXxRY=",
    paragraph:
      "Der Blauwal (Balaenoptera musculus) ist ein Bartenwal in der Familie der Furchenwale (Balaenopteridae). Mit einer Körperlänge von bis zu 33 Metern und einer Körpermasse von bis zu 200 Tonnen ist der Blauwal eines der größten und schwersten bekannten Tiere der Erdgeschichte. Als Kosmopolit ist diese Art in allen Ozeanen der Erde verbreitet.",
  },
  {
    titel: "Orca",
    image:
      "https://media.gettyimages.com/id/89874480/de/foto/orca-jumping-out-of-water.jpg?s=612x612&w=0&k=20&c=BegxKEifaYS0v7H5fTFnAQ2gHznS-ATMu6mXLRpWL9M=",
    paragraph:
      "Der (Große) Schwertwal (Orcinus orca), auch Orca, Killerwal, Mörderwal oder veraltet Butzkopf[1] genannt, ist die größte heute vorkommende Art der Delfine. Schwertwale leben in allen Ozeanen, hauptsächlich in den Polargebieten.",
  },
  {
    titel: "Delphin",
    image:
      "https://images.pexels.com/photos/7316200/pexels-photo-7316200.jpeg?auto=compress&cs=tinysrgb&w=600",
    paragraph:
      "Die Delfine oder Delphine (Delphinidae) gehören zu den Zahnwalen (Odontoceti) und sind somit Säugetiere (Mammalia), die im Wasser leben (Meeressäuger). Delfine sind die vielfältigste und mit fast 40 Arten größte Familie der Wale (Cetacea). Sie sind in allen Meeren verbreitet, einige Arten kommen auch in Flüssen vor.",
  },
  {
    titel: "Gefahr für Wale",
    image:
      "https://media.istockphoto.com/id/1385202272/de/foto/fort-lauderdale-florida-29-februar-2016-sch%C3%B6ne-aussicht-auf-stadtkan%C3%A4le-mit-booten-und.jpg?s=2048x2048&w=is&k=20&c=BefA2zpP0L_F6OsfBDdagOVpOgkfeVPhmawl8lgohGg=",
    paragraph:
      "Wale sind eine der faszinierendsten und größten Tierarten der Welt. Dennoch sind sie durch verschiedene Faktoren stark gefährdet.",
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

console.log(fetch("./Gefahr.html"));
