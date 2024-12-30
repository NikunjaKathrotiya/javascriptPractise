const john = {
    fullName: "john smith",
    height: 1.92,  
    weight: 92,  
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};
 
const mark = {
    fullName: "mark miller",
    height: 1.69,
    weight: 78,    
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);
 
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
} else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI (${john.bmi})`);
}