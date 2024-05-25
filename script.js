const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
let gameSpeed = 19;

const backgroundImage1 = new Image();
backgroundImage1.src = 'layer-1.png';
const backgroundImage2 = new Image();
backgroundImage2.src = 'layer-2.png';
const backgroundImage3 = new Image();
backgroundImage3.src = 'layer-3.png';
const backgroundImage4 = new Image();
backgroundImage4.src = 'layer-4.png';
const backgroundImage5 = new Image();
backgroundImage5.src = 'layer-5.png';

window.addEventListener('load',function(){
  
const slider= document.getElementById('slider');
slider.value=gameSpeed;
const Speed= document.getElementById('Speed')
Speed.innerHTML=gameSpeed;
slider.addEventListener('change',function(e){
  gameSpeed=e.target.value;
  Speed.innerHTML=gameSpeed;
})//changes the speed according to sliders position

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400;
        this.height = 700;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = 0;
        }
        this.x = Math.floor(this.x - this.speed);
    }
    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x+this.width, this.y, this.width, this.height);
    }
}

const layer1 = new Layer(backgroundImage1, 0.2);
const layer2 = new Layer(backgroundImage2, 0.4);
const layer3 = new Layer(backgroundImage3, 0.6);
const layer4 = new Layer(backgroundImage4, 0.8);
const layer5 = new Layer(backgroundImage5, 1);

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  layer1.update();
  layer1.draw();
  layer2.update();
  layer2.draw();
  layer3.update();
  layer3.draw();
  layer4.update();
  layer4.draw();
  layer5.update();
  layer5.draw();
  
  requestAnimationFrame(animate);
}
animate();

});
