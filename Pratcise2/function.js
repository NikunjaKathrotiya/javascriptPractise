// "use strict";
// function logger()
// {
//     console.log('my name is nikunja!!!');   
// }
// logger();


// function fruits3(orange,apple)
// {
//     console.log(`take ${orange} and take some ${apple} for make juice`);   
// }
// fruits3(3,5);

// const calculation1= (birthdate,name) =>{
//     const age=2025-birthdate;
//     const retiremnet=63-age;
//     return `my name is ${name} and age is ${age} and i have ${retiremnet} years left for retirment.`;
// }
// console.log(calculation1(2004,"john"));

function cutfruits(fruits)
{
   return fruits *4;
}

function totalfruits(apple,orange){
const applePiecses = cutfruits(apple);
const orangePieces = cutfruits(orange);
const juice=`juice with ${applePiecses} orangpieces and  ${orangePieces} applejuices for made healthy juice`;
return juice;
}
console.log(totalfruits(2,3));


