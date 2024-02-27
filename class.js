class Product{
    conutry='bangladesh';
    constructor(name){
        this.name=name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`);
    }
    
}

const lenovo= new Product();
lenovo.speak('Go for goal');
