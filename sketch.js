var man, man_walking;
var thunder;

function preload(){
  background0 = loadImage("bats.jpg");
    
  man_walking = loadAnimation("walking8.png","walking7.png","walking6.png","walking5.png","walking4.png","walking3.png","walking2.png","walking1.png",);

  thunderStorm1 = loadImage("thunderBolt1.png");
  thunderStorm2 = loadImage("thunderBolt2.png");
  thunderStorm3 = loadImage("thunderBolt3.png");
  thunderStorm4 = loadImage("thunderBolt4.png");

}

function setup(){
  createCanvas(900,600);
   
  man = createSprite(200,450,0,0);
  man.addAnimation("walking",man_walking);
  man.scale = 0.44;

}

function draw(){
  background(background0);

  spawnThunder();
  drawSprites();
}

function spawnThunder(){
    if(frameCount % 80 === 0){
        thunder = createSprite(0,50,0,0);
        thunder.x = Math.round(random(50,850));

        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: thunder.addImage(thunderStorm1);
                  break;
          case 2: thunder.addImage(thunderStorm2);
                  break;
          case 3: thunder.addImage(thunderStorm3);
                  break;
          case 4: thunder.addImage(thunderStorm4);
                  break;
          default: break;
        }
        //console.log(rand);

        thunder.scale = 0.5;
        thunder.lifetime = 12;

    }
}