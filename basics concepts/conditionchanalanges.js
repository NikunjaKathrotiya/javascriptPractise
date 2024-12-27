    let  bill =275;
    const tip = (bill>=50 && bill <=300) ? bill *0.15 : bill *0.20;
    console.log(tip);
    console.log(`the bill is ${bill} and tip is ${tip} and total is ${bill + tip}`);
