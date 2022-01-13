export class Feedback{
    id:number;
    text:string;
    rating:number;

    constructor(feedback){
        this.id = feedback.id || 0;
        this.text = feedback.text || "";
        this.rating = feedback.rating || "";
    }
}