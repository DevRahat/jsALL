function greeting(greetingHandler,name){
    greetingHandler(name);
}
function greetingHandler(name){
    console.log('Good Morning', name);
}
function greetEvening(name){
    console.log('Good evening', name);
}
greeting(greetingHandler,'Tom Hanks');
greeting(greetEvening, 'Zayed Khan');