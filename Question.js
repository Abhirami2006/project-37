class Question{
    constructor(){
        this.input = createInput("Name");
        this.input1 = createInput('Enter correct option no.')
        this.question = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
        this.option4 = createElement('h2');
        this.button = createButton('SUBMIT');
        this.title = createElement('h1');
    }

    hide(){
        this.input.hide();
        this.title.hide();
        this.button.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(450,5);

        this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter");
        this.question.position(180,80);

        this.option1.html("1: Everyone ");
        this.option1.position(260,120);

        this.option2.html("2: Envelope ");
        this.option2.position(260,150);

        this.option3.html("3: Estimate ");
        this.option3.position(260,180);

        this.option4.html("4: Example ");
        this.option4.position(260,210);

        this.input.position(280,290);
        this.input1.position(500,290);
        this.button.position(470,350);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestantCount+= 1;
        })
    }
}