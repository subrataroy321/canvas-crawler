let movementDisplay;
let game;
let ctx;
let ogre;
let hero;

// // character refs
    
    // let ogre = {
        //     x: 500,
        //     y: 100,
        //     color: '#bada55',
        //     width: 40,
        //     height: 80,
        //     alive: true,
    //     render: function() {
        //         ctx.fillStyle = this.color;
    //         ctx.fillRect(this.x, this.y, this.width, this.height);
    //     }
    // }

    // const drawBox = (x, y, size, color) => {
    //     ctx.fillStyle = color;
    //     ctx.fillRect(x, y, size, size)
    //     // ctx.strokeStyle = 
    // }

    // drawBox(200, 100, 200, 'hotpink');

    // // DRAW A BOX
    // // set a fill color
    // ctx.fillStyle = '#ffffff';
    // // set a line color
    // ctx.strokeStyle = 'red';
    // // set a line width
    // ctx.lineWidth = 5;
    // // call the fillRect to draw the filled square
    // ctx.fillRect(10, 10, 100, 100)
    // // call strokeRect to draw the line rectangle
    // ctx.strokeRect(10, 10, 100, 100);

    // crawler constructor function
    function Crawler(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.alive = true;
        this.render = function() {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    // detectHit function
    const detectHit = () => {
        // check for collissiom on x asis
        // check for collissiom on y asis
        if (hero.x + hero.width > ogre.x &&
            hero.x < ogre.x + ogre.width &&
            hero.y + hero.height > orge.y &&
            hero.y < ogre.y + ogre.height) {
                console.log('collission! 💥')
                ogre.alive = false;

            }
    }
    
    const gameLoop = () => {
        // clear the canvas
        ctx.clearRect(0,0, game.width, game.height);
        // display the x, y coordinates of our hero onto the DOM
        movementDisplay.textContent = `X:${hero.x}\nY:${hero.y}`
        // check if the ogre is alive and 
        if (ogre.alive) {
            // render the ogre
            ogre.render();
            // chcek the collision
            // TODO detectHit()
            detectHit();
        }
        // render the hero
        hero.render()

    }

    const movementHandler = e => {
        //console.log(e);
        // keycodes w: 87, a: 65, s : 83, d: 68

        // using switch
        switch (e.keyCode) {
            case (87):
            if (hero.y > 0) hero.y -=5 // hero moves up
            break;
            case (83):
            if (hero.y + hero.height < game.height) hero.y +=5 // hero moves down
            break;
            case(65):
            if (hero.x > 0) hero.x -=5 // hero moves left
            break;
            case(68):
            if (hero.x + hero.width < game.width) hero.x +=5 // hero moves right
            break;
            default:
                console.log('invalid keystroke')
        }


        // //using if statement
        // // when user presses w
        // if (e.keyCode === 87 && hero.y > 0) {
        //     // hero moves up
        //     hero.y -= 5
        // } else if(e.keyCode === 83 && hero.y + hero.height < game.height) {
        //     // hero moves down
        //     hero.y +=5
        // } else if(e.keyCode === 65 && hero.x > 0) {
        //     // hero moves left
        //     hero.x -=5
        // } else if(e.keyCode === 68 && hero.x + hero.width < game.width ) {
        //     // hero moves down
        //     hero.x +=5
        // }
    }



document.addEventListener('DOMContentLoaded', event => {
    // DOM REFS
    // the movement tag
    movementDisplay = document.getElementById('movement');
    //canvas
    game = document.getElementById('game');

    // set canvas configs
    game.setAttribute('height', 400);
    game.setAttribute('width', 800);
    // context
    ctx = game.getContext('2d');

    ogre = new Crawler(300, 100, 80, 120, '#bada55');
    hero = new Crawler(100, 100, 50, 50, 'hotpink');
    // hero.render();
    
    
    // KEYDOWN EVENT
    document.addEventListener('keydown', movementHandler)
    
    let runGame = setInterval(gameLoop, 60);
    // CLICK EVENT
    // game.addEventListener('click', (e) => {
       
    //     // drawBox(e.offsetX, e.offsetY, 50, 'hotpink')
        
    //     // clear the gameboard
    //     ctx.clearRect(0,0, game.width, game.height); 
    //     // render our hero
    //     hero.render()
    //     // set ogre
    //     ogre.x = e.offsetX;
    //     ogre.y = e.offsetY;
    //     ogre.render();
    // })
})
