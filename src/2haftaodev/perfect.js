function perfect(number) {
    let total = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
        total += i
        }             
    }
    if (total == number) {
        console.log(number + " mükemmel sayıdır")
    }
    else {
        console.log(number + " mükemmel sayı değildir")
    }
    //result = total == number ? number + " mükemmel sayıdır":number + " mükemmel sayı değildir"
    //console.log(result)
    //console.log(total == number ? number + " mükemmel sayıdır":number + " mükemmel sayı değildir")
}
perfect(28)


