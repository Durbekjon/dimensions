let rubl = document.querySelector('.InputRubl'),
     sum = document.querySelector('.InputSum');
     rubl.addEventListener('input', function(){
          sum.value = `${rubl.value * 154.60}`
     }
     )
     sum.addEventListener('input', function(){
          rubl.value = `${sum.value / 154.60}`
     }
     )