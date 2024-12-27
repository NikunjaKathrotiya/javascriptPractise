console.log(Boolean(undefined)); //false
console.log(Boolean(0)); //false
console.log(Boolean({})); //true
console.log(Boolean('johns')); //true
console.log(Boolean('')); //false

let money = 100;
if(money)
{
    console.log("dont spent it all");
}
else{
    console.log("you should get a job!");
}

let height=100;
if(height)
{
console.log("yay!! height is defined")
}
else{
    console.log("oopss height is not defined");   
}