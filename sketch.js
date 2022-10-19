var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var boy, boy_running;
var i;

function preload(){
  //loadImage de path (camino)
  pathImg = loadImage("path.png")
  //loadAnimation de boy (niño)
  boy_running = loadAnimation("Jake1.png", "Jake2.png", "Jake3.png", "Jake4.png", "Jake5.png")
  
 
}

function setup(){
  createCanvas(400,400);
 //crear sprite de path (camino) 
  path = createSprite(200, 200)
//agregar imagen de path
  path.addImage(pathImg)
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
  path.velocityY = -5
  path.scale=1;

//crear sprite de boy (niño)
boy = createSprite(200,130)
//agregar animación para boy
boy.addAnimation("running", boy_running)
boy.scale=0.25;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = true

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = true

}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mouseX;


  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide.visible = true
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
