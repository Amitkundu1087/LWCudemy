import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullname ="Amit Kundu";
    title ="Aura";
    @track address ={
        city : "jind",
        state :"HR"
    }
    changeHandler(event){
        this.title= event.target.value;
    }
    handleTrack(event){
        this.address.city =event.target.value;
    }

}