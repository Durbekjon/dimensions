let dolor = document.querySelector('.InputDollor'),
     sum = document.querySelector('.InputSum');
     dolor.addEventListener('input', function(){
          sum.value = `${dolor.value * 11266.59}`
     }
     )
     sum.addEventListener('input', function(){
          dolor.value = `${sum.value / 11266.59}`
     }
     )
