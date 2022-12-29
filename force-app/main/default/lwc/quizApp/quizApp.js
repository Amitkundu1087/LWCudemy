import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected={}  // for storing the result
    correctAnswe=0 //to show no of correct answer
    isSubmitted=false // to show the result
    myQuestions = [
        {
            id:"Question1",
            question:"Which one of the follwing is not a tempalte loop?",
            answer:{
                a:"for:each",
                b:"iterator",
                c:"map loop"

            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"Which of the file is invalid in LWC?",
            answer:{
                a:".svg",
                b:".apex",
                c:".css"

            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"Which one of the follwing is not a directive?",
            answer:{
                a:"for:each",
                b:"if:true",
                c:"@track"

            },
            correctAnswer:"c"
        },
    ]
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }
    changeHandler(event){
        console.log("name", event.target.name);
        console.log("value",event.target.value);
        const {name,value} = event.target;

        this.selected = {...this.selected, [name] :value}
    }

    submitHandler(event){
        event.preventDefault();
        let correct=this.myQuestions.filter(item => this.selected[item.id]===item.correctAnswer);
        this.correctAnswe =correct.length;
        console.log(" this.correctAnswe", this.correctAnswe);
        this.isSubmitted=true;
    }

    resetHandler(){
        this.selected={};
        this.correctAnswe=0;

    }
}