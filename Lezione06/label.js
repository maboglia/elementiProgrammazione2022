for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0)
        console.log('FIZZBUZZ');
    else {

        if (i % 3 == 0)
            console.log('fizz');
        if (i % 5 == 0)
            console.log('buzz');
    }
    console.log(i);


}