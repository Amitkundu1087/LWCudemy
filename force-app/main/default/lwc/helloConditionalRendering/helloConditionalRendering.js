import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isVisivle = false;


    handleClick(){
        console.log('button clicked');
        this.isVisivle=true;
    }
}