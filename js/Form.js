class Form{
    constructor(){}
    display(){
        var title=createElement('h2');
        title.html("CAR RACE");
        title.position(620,100); 
        var input= createInput("Name");
        var button= createButton('PLAY');
        input.position(620,300);
        button.position(680,360);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            playerCount+=1
            player.update(name);
            player.updateCount(playerCount);
            var greeting= createElement('h3')
            greeting.html("hello "+ name);
            greeting.position(620,300)
        })
    }
}