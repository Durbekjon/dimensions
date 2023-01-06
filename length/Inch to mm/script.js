let inch = document.querySelector('.InputInch'),
     mm = document.querySelector('.InputMm');
     inch.addEventListener('input', function(){
          mm.value = `${inch.value * 25.4}`
     }
     )
     mm.addEventListener('input', function(){
          inch.value = `${mm.value / 25.4}`
     }
     )