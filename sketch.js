
var bg, solo;
var tarzan, tarzan_img, tarzan_down, tarzan_right, tarzan_jump;
var inim, inim_img, inim2;
var ave1_img, ave2, onca;
var vida=4, kg
var grupoA, grupoC

function preload(){ // função que carregar todas as imagens e animações
  bg = loadImage("assets/bg.png");
  tarzan_img = loadAnimation("assets/t1.png");
  tarzan_down = loadAnimation("assets/t2.png");
  tarzan_right = loadAnimation("assets/t8.png", "assets/t9.png","assets/t10.png","assets/t11.png");
  tarzan_jump = loadAnimation("assets/t2.png", "assets/t3.png","assets/t4.png","assets/t5.png","assets/t6.png","assets/t7.png");
  inim_img = loadAnimation ("assets/c1.png", "assets/c2.png","assets/c3.png","assets/c4.png","assets/c5.png", "assets/c6.png");
  ave1_img = loadAnimation("assets/p1.png", "assets/p2.png","assets/p3.png");
  ave2 = loadAnimation("assets/p4.png", "assets/p5.png","assets/p6.png","assets/p7.png");
  inim2 = loadAnimation("assets/c7.png", "assets/c8.png","assets/c9.png","assets/c10.png","assets/c11.png", "assets/c12.png");
  onca = loadAnimation("assets/o1.png", "assets/o2.png","assets/o3.png","assets/o4.png","assets/o5.png", "assets/o6.png", "assets/o7.png", "assets/o8.png" );
  kg = loadImage ("assets/k3.png")
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(600,200);

  solo= createSprite(300,199,600,1);
  tarzan= createSprite(70, 150, 50, 50)
  tarzan.addAnimation("Em_pe", tarzan_img)
  tarzan.addAnimation("baixo", tarzan_down)
  tarzan.addAnimation("ataque", tarzan_right)
  tarzan.addAnimation("pulando", tarzan_jump)
  tarzan.scale=0.85
  tarzan.debug=true
  tarzan.setCollider("circle",0,0,40)
  grupoA=new Group()
  grupoC=new Group()
  
}

function draw(){
  background(bg);
  drawSprites(); 
  text(mouseX + ","+ mouseY, mouseX, mouseY);
  controle();
  tarzan.collide(solo)
  animais();
  cacador();
  if(tarzan.isTouching(grupoA)){
    vida=vida-1
    tarzan.x=50
    tarzan.y=140
  }
  tarzan.overlap(grupoC,function(coletor,coletado){
    coletado.remove()
  })
  for (let index = 0; index < vida; index++) {
   image(kg,350+(index*60),-20,100,100);

    
  }
  if(vida===0){
    grupoA.destroyEach()
    tarzan.destroy()
    textSize(50)
    fill("white")
    text("Game Over",170,80)
  }
}

function controle (){
  if(keyDown("up")){
tarzan.y-=5
tarzan.changeAnimation("Em_pe", tarzan_img)

  }
  if(keyDown("left")){
    tarzan.x-=5
    
      }
      if(keyDown("right")){
        tarzan.x+=5
        tarzan.changeAnimation("ataque", tarzan_right)
        
          }
          if(keyDown("down")){
            tarzan.y+=5
            tarzan.changeAnimation("baixo",tarzan_down)
            tarzan.velocityY=0
              }
              if(keyDown("space")){
                tarzan.changeAnimation("pulando",tarzan_jump)
            tarzan.velocityY=-5
        
                
                  }
  

}
function animais (){
  if(frameCount%120===0){

  var rand2 = random(-2, 1)
  var animal = createSprite (620, 70, 10, 10)
  animal.velocityY += rand2
  animal.velocityX = -3
  animal.lifetime = 250
  animal.debug=true
  grupoA.add(animal)
  var rand = Math.round(random(1, 3))
  switch (rand) {
    case 1: animal.addAnimation("ave1", ave1_img)
      animal.scale = 0.2
      animal.velocityY += rand2
      break;

      case 2: animal.addAnimation("ave2", ave2)
      animal.velocityY += rand2
            
      break;

      case 3: animal.addAnimation("onca", onca)
      animal.velocityY =0
  animal.y =160
      break;

    default:
      break;
    
  }
}
}

function cacador (){
  if(frameCount%190===0){

  var inm = createSprite (620, 140, 10, 10)
  inm.scale = 0.3
  inm.velocityX = -3
  inm.lifetime = 250
  var rand = Math.round(random(1, 2))
  grupoC.add(inm)
  switch (rand) {
    case 1: inm.addAnimation("inm1", inim_img )
     inm.scale = 0.3
     
      break;

      case 2: inm.addAnimation("inm2", inim2 )
      inm.scale = 0.8
      
      break;
  
    default:
      break;
  }
}
}