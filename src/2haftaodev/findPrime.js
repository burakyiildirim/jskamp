function findPrime(...numbers) {
    
    for (let i = 0; i < numbers.length; i++) {
       
        for (let k = 2; k < numbers[i]; k++){
            if (numbers[i] % k == 0) {
                console.log(numbers[i] + " asal sayı değildir")
                break
            }
             
            if (k == numbers[i] - 1) {
                    console.log(numbers[i] + " asal sayıdır") 
                 }
            
             
             }
    }
   

}
findPrime(3,5,6,19,26,39,53,99,129) 