function stampa(testo){
    console.log('sono dentro la funzione'+testo)
    console.log(arguments);
    return testo+testo
  }
  
  stampa('hi', 'bonjour')
  
  let test = function (testo){

    if (typeof testo === 'string'){

    } else {

    }

    console.log('sono dentro la funzione'+testo)
    return testo+testo
  }
  
  console.log(test)
  
  let result = test('5')
  console.log(result);

  stampa(1,2,3,4,5,6,'sette')

