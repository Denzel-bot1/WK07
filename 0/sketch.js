// TODO: strings and text
//       iterate letters
//       iterate words


let mString = "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
textSize(16);
 
  let mWords=mString.split(" ");
  for (let idx = 0; idx < mWords.length; idx++) {

    let pos =map(idx, 0, mWords.length, 0, windowWidth);
    text(mWords[idx], pos, pos);
    
  }
  print(mString);
  print(mWords);
}
function draw() {
  // TODO: strings and text
//       iterate letters
//       iterate words


}
