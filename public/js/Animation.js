let playerState = 'fly'
// const dropdown = document.getElementById('animations');
// dropdown.addEventListener('change', function(event) {
    //     playerState = event.target.value;
    // })
    
    // const canvas = document.getElementById('canvas1');
    
    // const ctx = canvas.getContext('2d');
    // const CANVAS_WIDTH = canvas.width = 600;
    // const CANVAS_HEIGHT = canvas.height = 600;
    
    // ===================================================================================================================
    
    const canvas2 = document.getElementById('canvas2');
    const ctx2 = canvas2.getContext('2d');
    const CANVAS_WIDTH2 = canvas2.width = 2400;
    const CANVAS_HEIGHT2 = canvas2.height = 700;
    let gameSpeed= 5;
    let gameFrame = 0;
    let dragonFrame = 0;
    
    const playerImage = new Image();
    playerImage.src = '/Images/Dragon (6).png';
    const spriteWidth = 573;
    const spriteHeight = 582;
    
    
    // let gameFrame = 0;
    const staggerFrames = 5;
    const spriteAnimations =[]
    const animationStates= [
        {name: "walk", 
     frames:12, 
     xPosition:100,
     yPosition:100
    },
    {name:"fly",
    frames:9,  
    xPosition:100,
    yPosition:100
},
{name:"fall",
frames:7, 
xPosition:100,
yPosition:100
} ,
{name:"run",
frames:9, 
xPosition:100,
yPosition:100
} ,
{name:"dizzy",
frames:11, 
xPosition:100,
yPosition:100
} ,
{name:"sit",
frames:5, 
xPosition:100,
yPosition:100
} ,
{name:"roll",
frames:7, 
xPosition:100,
yPosition:100
} ,
{name:"bite",
frames:7, 
xPosition:100,
yPosition:100
} ,
{name:"ko",
frames:12, 
xPosition:100,
yPosition:100
}, 
{name:"gethit",
frames:4, 
xPosition:100,
yPosition:100
    } 
    ]
    // Dragon animation state selector
    animationStates.forEach((state, index) => {
        let frames ={
            loc:[]
        }
        for (let j = 0; j < state.frames; j++) {
            let positionX = j * spriteWidth;
            let positionY = index * spriteHeight;
            frames.loc.push({x:positionX, y: positionY})
        }
        spriteAnimations[state.name]= frames;
    });
    console.log(spriteAnimations)
// Dragon animation
    // function animate (){
    //     ctx2.clearRect(0, 0, CANVAS_WIDTH2, CANVAS_HEIGHT2)
       
    // }
    
    // animate();
    
    
    
    const backgroundLayer1 = new Image();
    backgroundLayer1.src = '/Images/back sky.png';
    const backgroundLayer2 = new Image();
    backgroundLayer2.src = '/Images/sky.png';
        const backgroundLayer3 = new Image();
        backgroundLayer3.src = '/Images/Clouds behind.png';
        const backgroundLayer4 = new Image();
        backgroundLayer4.src = '/Images/MOUNTAINS back.png';
        const backgroundLayer5 = new Image();
        backgroundLayer5.src = '/Images/Mountains.png';
        const backgroundLayer6 = new Image();
        backgroundLayer6.src = '/Images/Clouds.png';
        const backgroundLayer7 = new Image();
        backgroundLayer7.src = '/Images/Trees.png';
        const backgroundLayer8 = new Image();
        backgroundLayer8.src = '/Images/Water.png';
        const backgroundLayer9 = new Image();
        backgroundLayer9.src = '/Images/Waves.png';
const backgroundLayer10 = new Image();
backgroundLayer10.src = '/Images/Land.png';

window.addEventListener('load',function(){
    // const slider = document.getElementById('slider')
    // slider.value = gameSpeed
    // const ShowSpeed = document.getElementById('showGameSpeed')
    // showGameSpeed.innerHTML = gameSpeed;
    // slider.addEventListener('change', function(e){
    //     console.log(e)
    //     gameSpeed = e.target.value;
    //     // showGameSpeed.innerHTML = e.target.value
    // }
    // )
    
    class Layer {
        constructor(image, speedModifier){
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * this.speedModifier;
        }
        update(){
            this.speed = gameSpeed * this.speedModifier
            if (this.x <= -this.width){
                this.x = 0;
            }
            
            this.x = Math.floor(this.x - this.speed);
            // this.x = gameFrame * this.speed % this.width;
            
        }
        draw(){
            ctx2.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx2.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }
    
    // 
    const layer1 = new Layer(backgroundLayer1, 0.0);
    const layer2 = new Layer(backgroundLayer2, 0.0);
    const layer3 = new Layer(backgroundLayer3, 0.3);
    const layer4 = new Layer(backgroundLayer4, 0.0);
    const layer5 = new Layer(backgroundLayer5, 0.2);
const layer6 = new Layer(backgroundLayer6, 0.01);
const layer7 = new Layer(backgroundLayer7, 0.1);
const layer8 = new Layer(backgroundLayer8, 0.3);
const layer9 = new Layer(backgroundLayer9, 1.0);
const layer10 = new Layer(backgroundLayer10, 0.7);

const gameObjects = [layer1,layer2,layer3,layer4,layer5,layer6,layer7,layer8,layer9,layer10];

function animate(){
    ctx2.clearRect(0,0,CANVAS_WIDTH2,CANVAS_HEIGHT2);
    let position = Math.floor(dragonFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    
    gameObjects.forEach(object =>{
        object.update();
        object.draw();
        
    });
    ctx2.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 100, 100, 150, 150);
    dragonFrame++;
    gameFrame--;
    requestAnimationFrame(animate);
};
animate();
})
// ===================================================================================================================



// let dragonMovement = [{
    //     movement: Jump,
    //     // gameSpeed2,
    
    
    // }]
