var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ninja, ninja_running, ninja_jumping;
var ground, invisibleGround, invisibleGround2, invisibleGround3, groundImage;
var background2, bgIMG;

var boss, boss2, boss3, plataforma;

var score=0;




function preload(){
  ninja_running =   loadAnimation("png/Run__001.png","png/Run__002.png","png/Run__003.png",
                                  "png/Run__004.png","png/Run__005.png","png/Run__006.png",
                                  "png/Run__007.png","png/Run__008.png","png/Run__009.png");
  ninja_jumping = loadAnimation("png/Jump__001.png","png/Jump__002.png","png/Jump__003.png",
                                "png/Jump__004.png","png/Jump__005.png","png/Jump__006.png",
                                "png/Jump__007.png","png/Jump__008.png","png/Jump__009.png",);
  ninja_idle = loadAnimation("png/Idle__001.png","png/Idle__002.png","png/Idle__003.png",
                                "png/Idle__004.png","png/Idle__005.png","png/Idle__006.png",
                                "png/Idle__007.png","png/Idle__008.png","png/Idle__009.png",);
  
  groundImage = loadImage("ground2.png");
  
  bgIMG = loadImage("png/bgimg.png")
  
  bossImg = loadImage("png/boss.png");
  
  plataformaImg = loadImage("png/plataforma.png")
}

function setup() {
  createCanvas(1200, 600);
  
  background2 = createSprite(600,300,2000,600)
  background2.addImage("bg",bgIMG)

  ninja = createSprite(50,500,60,150);
  ninja.addAnimation("idle", ninja_idle);
  ninja.addAnimation("jumping", ninja_jumping);
  ninja.addAnimation("running", ninja_running);
  
  
  ninja.scale = 0.2;
  
  boss = createSprite(1100,500)
  boss.scale = 2
  boss.addImage(bossImg)
  boss2 = createSprite(1100,360)
  boss2.scale = 2
  boss2.addImage(bossImg)
  boss3 = createSprite(1100,220)
  boss3.scale = 2
  boss3.addImage(bossImg)
 

  
  invisibleGround = createSprite(200,550,2000,10);
  invisibleGround.visible = false;
  invisibleGround2 = createSprite(1199,300,10,2000);
  invisibleGround2.visible = false;
  invisibleGround3 = createSprite(1,300,10,2000);
  invisibleGround3.visible = false;
  invisibleGround4 = createSprite(1050,1,10,2000);
  invisibleGround4.visible = false;
  invisibleGround5 = createSprite(950,1,10,2000);
  invisibleGround5.visible = true;
  
  score = 0;
  plataforma = createSprite( 1100, 412)
  plataforma.addImage(plataformaImg)
  plataforma.scale = 0.5
  plataforma2 = createSprite( 1100, 272)
  plataforma2.addImage(plataformaImg)
  plataforma2.scale = 0.5
}
ninja.velocityY = 0
function draw() {
  background(198)
  //trex.debug = true;
  text("Score: "+ score, 500,50);
  ninja.changeAnimation("idle",ninja_idle);
 ninja.collide(plataforma)
 ninja.collide(plataforma2)
  if(keyDown("space") && ninja.velocityY == 0) {
    ninja.velocityY = -12;
    ninja.changeAnimation("jumping",ninja_jumping);
  }
  if(keyDown("d")) {
    ninja.x= ninja.x+3;
    ninja.changeAnimation("running",ninja_running);
  }
  if(keyDown("a")) {
    ninja.x= ninja.x-3;
  }
  
  ninja.velocityY = ninja.velocityY + 0.8
  
  
  
  ninja.collide(invisibleGround);
  ninja.collide(invisibleGround2);
  ninja.collide(invisibleGround3);
  ninja.collide(invisibleGround4);
  drawSprites();
  if (ninja.x > 950) {
    if(ninja.y < 272 || keyDown("S")) {
      boss3.visible = false
    }
    if(ninja.y > 412 || keyDown("S")) {
      boss.visible = false
    }
    if(ninja.y > 272 || ninja.y < 412 ||  keyDown("S")) {
      boss2.visible = false
    }
  }
}



