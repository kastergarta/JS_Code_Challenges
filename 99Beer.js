let beer = 99;
while (beer > 0) {
  let verse = `${beer} bottles of beer on the wall,
  ${beer} bottles of beer!
  Take one down, pass it around
  ${beer-1} bottles of beer on the wall`;

  console.log(verse);
  beer--;
}

var bottles = 99;
var songTemplate  = "{X} bottles of beer on the wall \n" +
                    "{X} bottles of beer \n"+
                    "Take one down, pass it around \n"+
                    "{X-1} bottles of beer on the wall \n";

function song(x, txt) {
  return txt.replace(/\{X\}/gi, x).replace(/\{X-1\}/gi, x-1) + (x > 1 ? song(x-1, txt) : "");
}

console.log(song(bottles, songTemplate));
