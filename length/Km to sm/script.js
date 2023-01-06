let km = document.querySelector('.InputKm'),
     sm = document.querySelector('.InputSm');
     km.addEventListener('input', function(){
          sm.value = `${km.value * 100000}`
     }
     )
     sm.addEventListener('input', function(){
          km.value = `${sm.value / 100000}`
     }
     )