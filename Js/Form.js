class Form{
    constructor(){
    this.input=createInput("name");
    this.Button=createButton("play");
    this.Greeting=createElement('h2');
    }
    hide(){
        this.Greeting.hide();
        this.input.hide();
        this.Button.hide();

    }
    display(){
        var title=createElement('h1');
        title.html("CAR RACING GAME");
        title.position(130,0);
        this.input=createInput("Name");
        this.Button=createButton("PLAY");
        //var Greeting=createElement('h2');
        //Greeting.html("hello")
        this.input.position(130,160);
        this.Button.position(250,200);

        this.Button.mousePressed(()=>{
         this.input.hide();
         this.Button.hide();
         player.name =this.input.value();
         playerCount+=1;
         player.index=playerCount
         player.update();
         player.updateCount(playerCount);
         //this.Greeting=createElement('h3');
         this.Greeting.html("Hello"+name);
         this.Greeting.position(130,160);
        })
    }
    
}