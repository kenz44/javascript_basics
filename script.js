// getting the names and age from user with the
// help of prompt
let name = prompt('What is your name?');
let age = prompt('What is your age?');
let entryAge = 18;
let seniorAge = 60;

// printing the age to the console
alert(`Your name is ${name} and you are ${age} years old.`);

// using conditional if-else
if( (age > entryAge) && (age <= seniorAge)){
// console.log('Welcome to La La Land!');
swal({
    title: "Great!",
    text: "Welcome to La La Land!",
    icon: "success",
    });
}else if(age > seniorAge){
// console.log('Your ride is free..Have a good Day!');
    swal({
    title: "Awesome!",
    text: "Welcome Sir/Mam to La La Land!",
    icon: "info",
    });
}else{
//console.log('Sorry.. buddy.')
swal({
    title: "Oops!",
    text: "Sorry Buddy!",
    icon: "warning",
    });
}
