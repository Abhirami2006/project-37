class Quiz{
    constructor(){}

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState : state
        });
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }

    play(){
        this.input.hide();
        this.title.hide();
        this.button.hide();

        textSize(30);
        text("Result of the Quiz",180,80);

        contestant.getContestantInfo();

        if(allContestants !== undefined){
            for(var plr in allContestants){
              var correctAns = this.option2;  
                if(correctAns === allContestants[plr].answer)
                  fill("Green");
                else
                  fill("Red"); 
            }
        }


    }
}