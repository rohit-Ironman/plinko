class Plinko {
    constructor(x,y){
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,40,40,options); 
        this.width = 40; 
        this.height = 40; 
        World.add(world,this.body); 
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER); 
        fill("white"); 
        rect(pos.x, pos.y, this.width, this.height); 

        for(var j = 40; j<=this.width; j=j+50)
        {
            plinkos.push(new Plinko(j,75)); 
        }
        for (var j = 15; j<=width-10; j=j+50)
        {
            plinkos.push(new Plinko(j, 175));
        }
    }
}