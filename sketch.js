
var bg, solo;
var tarzan, tarzan_img, tarzan_down, tarzan_right, tarzan_jump;
var inim, inim_img;
var ave1_img, ave2;

function preload(){ // função que carregar todas as imagens e animações
  bg = loadImage("assets/bg.png");
  tarzan_img = loadAnimation("assets/t1.png");
  tarzan_down = loadAnimation("assets/t2.png");
  tarzan_right = loadAnimation("assets/t8.png", "assets/t9.png","assets/t10.png","assets/t11.png");
  tarzan_jump = loadAnimation("assets/t2.png", "assets/t3.png","assets/t4.png","assets/t5.png","assets/t6.png","assets/t7.png");
  inim_img = loadAnimation ("assets/c1.png", "assets/c2.png","assets/c3.png","assets/c4.png","assets/c5.png", "assets/c6.png");
  ave1_img = loadAnimation("assets/p1.png", "assets/p2.png","assets/p3.png");
  ave2 = loadAnimation("assets/p4.png", "assets/p5.png","assets/p6.png","assets/p7.png");
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,200);

  solo= createSprite(300,199,600,1);
}

function draw(){
  background(bg);
  drawSprites(); 
  text(mouseX + ","+ mouseY, mouseX, mouseY);
}

