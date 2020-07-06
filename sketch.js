var startbutton;
var gamestate = "start";
var gamestate = "play";

function setup() {
  createCanvas(400,800);
  startbutton = createButton("start")
  startbutton.position(200,400);
}

function draw() {
  background(255,255,255);  
  if (gamestate === "start"){
    playbutton.display();
  }
    playbutton.mousePressed(()=>{
      gamestate = "play";
      playbutton.hide();
  })
  if(gamestate ==="play"){
    textSize(25)
    fill("black")
    text("Q.1 . Do you think we need to have free lunch meals in our school canteen for thekids who are very poor?",50, 200);
    text("yes", 75, 200);
    text("no", 85, 200);
    text("Q2. Would you be willing to contribute a small amount every month for such a  program?", 105, 200);
    text("yes", 115, 200);
    text("no", 125, 200);
    text("Q3. How much per month would you be willing to pay?", 150, 200);
    text("100", 160, 200);
    text("500", 170, 200);
    text("1000", 180, 200);
    text("more", 190, 200);
  }
  drawSprites();
}