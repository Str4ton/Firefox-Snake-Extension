function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = 0;
    this.ySpeed = scale * 1;
    this.total = 0;
    this.tail = [];

    this.draw = function(){
        ctx.fillStyle = "#FFFFFF";

        for(let i=0 ; i<this.tail.length; i++){
            ctx.fillRect(this.tail[i].x,this.tail[i].y, scale ,scale);
        }

        ctx.fillRect(this.x,this.y, scale ,scale);
    }

    this.update = function(){
        for(let i = 0; i<this.tail.length - 1; i++){
            this.tail[i] = this.tail[i+1];
        }

        this.tail[this.total-1] = { x: this.x, y:this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width){
            this.x = 0;
        }

        if(this.x < 0){
            this.x =canvas.width;
        }

        if(this.y > canvas.height){
            this.y = 0;
        }

        if(this.y < 0){
            this.y = canvas.height;
        }
    }


    


    this.changeDirection = function(direction){
        switch(direction){
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale *1; 
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale *1;
                break; 
            case 'Left':
                this.xSpeed = -scale *1;
                this.ySpeed = 0;
                break; 
            case 'Right':
                this.xSpeed = scale *1;
                this.ySpeed = 0;
                break; 
        }
    }


    this.searchFruit = function(fruit){
        if(this.x != fruit.x || this.y != fruit.y){
            return true;
        }
        return false;
    }

    this.goToFruit = function(fruit){
        if(this.x > fruit.x){
            /*
            if(this.x == (this.tail[i].x + (scale *1))){
                if(this.y  == (this.tail[i].y - (scale *1))){
                    this.ySpeed = scale *1;
                    this.xSpeed = 0;
                }
                if(this.y  == (this.tail[i].y + (scale *1))){
                    this.ySpeed = -scale *1;
                    this.xSpeed = 0;
                }
            }
            */
            this.xSpeed = -scale*1;
            this.ySpeed = 0;
        }
        
        if(this.x > fruit.x && this.y == this.fruit){
            /*
            if(this.x == (this.tail[i].x + (scale *1))){
                if(this.y  == (this.tail[i].y- (scale *1))){
                    this.ySpeed = scale *1;
                    this.xSpeed = 0;
                }
                if(this.y  == (this.tail[i].y + (scale *1))){
                    this.ySpeed = -scale *1;
                    this.xSpeed = 0;
                }
            }
            */
            this.ySpeed = 0;
            this.xSpeed = -scale*1;
        }
        if(this.x < fruit.x){
            /*
            if(this.x == (this.tail[i].x - (scale *1))){
                if(this.y  == (this.tail[i].y - (scale *1))){
                    this.ySpeed = scale *1;
                    this.xSpeed = 0;
                }
                if(this.y  == (this.tail[i].y + (scale *1))){
                    this.ySpeed = -scale *1;
                    this.xSpeed = 0;
                }
            }
            */
            this.xSpeed = scale*1;
            this.ySpeed = 0;
        }

        if(this.x < fruit.x && this.y == this.fruit){
            /*
            if(this.x == (this.tail[i].x - (scale *1))){
                if(this.y  == (this.tail[i].y - (scale *1))){
                    this.ySpeed = scale *1;
                    this.xSpeed = 0;
                }
                if(this.y  == (this.tail[i].y + (scale *1))){
                    this.ySpeed = -scale *1;
                    this.xSpeed = 0;
                }
            }
            */
            this.ySpeed = 0;
            this.xSpeed = scale*1;
        }

        if(this.y > fruit.y){
            /*
            if(this.y  == (this.tail[i].y + (scale *1))){
                if(this.x == (this.tail[i].x + (scale *1))){
                    this.xSpeed = -scale*1;
                    this.ySpeed = 0;
                }
                if(this.x == (this.tail[i].x - (scale *1))){
                    this.xSpeed = scale*1;
                    this.ySpeed = 0;
                }
            }
            */
            this.ySpeed = -scale*1;
            this.xSpeed = 0;
        }

        if(this.y > fruit.y && this.x == fruit.x){
            /*
            if(this.y  == (this.tail[i].y + (scale *1))){
                if(this.x == (this.tail[i].x + (scale *1))){
                    this.xSpeed = -scale*1;
                    this.ySpeed = 0;
                }
                if(this.x == (this.tail[i].x - (scale *1))){
                    this.xSpeed = scale*1;
                    this.ySpeed = 0;
                }
            }
            */
            this.xSpeed = 0;
            this.ySpeed = -scale*1;
        }

        if(this.y < fruit.y){
            /*
            if(this.y == (this.tail[i].y - (scale *1)) ){
                if(this.x == (this.tail[i].x + (scale *1))){
                    this.xSpeed = -scale*1;
                    this.ySpeed = 0;
                }
                if(this.x == (this.tail[i].x - (scale *1))){
                    this.xSpeed = scale*1;
                    this.ySpeed = 0;
                }
            }
            */
            this.ySpeed = scale*1;
            this.xSpeed = 0;
        }

        if(this.y < fruit.y && this.x == fruit.x){
            /*
            if(this.y  == (this.tail[i].y - (scale *1))){
                if(this.x == (this.tail[i].x + (scale *1))){
                    this.xSpeed = -scale*1;
                    this.ySpeed = 0;
                }
                if(this.x == (this.tail[i].x - (scale *1))){
                    this.xSpeed = scale*1;
                    this.ySpeed = 0;
                }
            }
            */
            this.xSpeed = 0;
            this.ySpeed = scale*1;
        }
    }

    this.eat = function(fruit){
        if(this.x == fruit.x && this.y == fruit.y){
            this.total ++;
            return true;
        }
        return false;
    }

    this.snakeAlert = function(){
        for(let i=0 ; i<this.tail.length; i++){
            if((this.x + (scale *1))== this.tail[i].x && (this.y + (scale *1)) == this.tail[i].y ){ 
                this.xSpeed = -scale *1;
                this.ySpeed = -scale *1;
            }
            if((this.x + (scale *1))== this.tail[i].x && (this.y - (scale *1)) == this.tail[i].y ){ 
                this.xSpeed = -scale *1;
                this.ySpeed = scale *1;
            }
            if((this.x - (scale *1))== this.tail[i].x && (this.y + (scale *1)) == this.tail[i].y ){ 
                this.xSpeed = scale *1;
                this.ySpeed = -scale *1;
            }
            if((this.x - (scale *1))== this.tail[i].x && (this.y - (scale *1)) == this.tail[i].y ){ 
                this.xSpeed = scale *1;
                this.ySpeed = scale *1;
            }
        }
    }

    this.snakeDead = function(){
        for(let i=0 ; i<this.tail.length; i++){
            if(this.x == this.tail[i].x && this.y == this.tail[i].y){ 
                return true;
            }
        }
        return false;
    }
}