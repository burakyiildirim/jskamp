function friend(number1 , number2) {
    let total1 = 0
    let total2 = 0
    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            total1 += i    
        }
    }
    for (let k = 0; k < number2; k++) {
        if(number2 % k ==0){
            total2 += k
        }
    }
    if (number1 == total2 && number2 == total1) 
    {
        console.log(number1+ " ve " + number2 + " arkadaş sayıdır")
        
    }
    else{
        console.log(number1+ " ve " + number2 + " arkadaş sayı değildir")
    }
}
friend(7567,4142)