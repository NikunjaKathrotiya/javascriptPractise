// const student=["ajay","Jay","Samip"];
// console.log(student);
// const calcage = function (birthyear)
// {
// return 2037-birthyear;
// }
// const years=[2020,2034,2040,2010];
// const age1 =calcage(years[0]);
// const age2 = calcage(years[1]);
// const age3 = calcage(years[years.length-1]);
 
 console.log("helloooo");
 
const sports=["cricket","vollyboll","chess"];
sports.push("hokyy");
console.log(sports);
 
 
 
const intro = {
    firstName:"nikunja",
    lastName:"kathrotiya",
    age:2004,
    job:"teacher",
    friends:["pathu","bhumi","harmi"],
    calcage: function(age)
    {
        return 2004-age;
    }
    };

    console.log(intro['calcage'](2025));
    console.log(intro);
    console.log(intro.firstName);

    const nameKey ="Name";
    console.log(intro['first'+nameKey]);
    console.log(intro['last'+nameKey]); 
    const introreponse = prompt("what do you want to know about me ??choose between first and lastname,age,friends");

    if(intro[introreponse])
 
    {
        console.log(intro[introreponse]);  
    }
    else
    {
        console.log("wrong request,choose between first and lastname,age,friends ");  
    }
    console.log(`i have three friedn bu tmy best frined us ${intro.friends[0]}`)


    const num = Math.random() * 2 ;
    console.log(num);
    