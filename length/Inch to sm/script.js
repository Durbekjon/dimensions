let inch = document.querySelector('.InputInch'),
     sm = document.querySelector('.InputSm');
     inch.addEventListener('input', function(){
          sm.value = `${inch.value * 2.54}`
     }
     )
     sm.addEventListener('input', function(){
          inch.value = `${sm.value / 2.54}`
     }
     )