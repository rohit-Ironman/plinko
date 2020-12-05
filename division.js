class Division {
    constructor(x,y,) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,20,200,options);
        this.width = 12; 
        this.height = 370; 
        World.add(world, this.body);
    
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER); 
        fill("white");
        rect(pos.x, pos.y, this.width, this.height);
       
     
      }
    };
