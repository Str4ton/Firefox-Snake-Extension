const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height/scale;
const columns = canvas.width/scale;

var snake;

(function setup(){
    snake = new Snake();
    fruit = new Fruit();
    tail = new Tail();

    fruit.pickLocation();

    window.setInterval(()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    /* snake.snakeAlert(); */
    

    
    if(snake.searchFruit(fruit)){
        snake.goToFruit(fruit);
    }

    if(snake.eat(fruit)){
        fruit.pickLocation();
    }

    if(snake.snakeDead()){
        location.reload(true);
    }

    }, 150);
}());


window.addEventListener('keydown' , ((evt) =>{
    const direction= evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}));
