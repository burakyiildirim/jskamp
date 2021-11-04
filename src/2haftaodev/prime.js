let number=1000
function prime(number) {
    for (let i = 2; i < number; i++) {
        for (let k = 2; k < i; k++) {
            if (i % k == 0) {
            break  
            }
            if (k == i - 1){
                console.log(i + " asal sayıdır")
            }
            
        }
            
     }
}
prime(number)