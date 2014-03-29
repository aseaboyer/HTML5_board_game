function Game(fps){
    this.paused = false;
    this.fps = fps;
    
    this.run = function() {
        var d = new Date();
        console.log(d.getTime());
        /*
        this.update();
        this.draw();
        */
    };
    
    this.draw = function() { // draw phase
        
    };
    this.update = function() { // game logic
    };
}