let dolor = document.querySelector('.InputDolor'),
     bitcoin = document.querySelector('.InputBitcoin');

     bitcoin.addEventListener('input', function(){
          dolor.value = `${bitcoin.value * 16861.10}`
     }
     )
     dolor.addEventListener('input', function(){
          bitcoin.value = `${dolor.value / 16861.10}`
     }
     )