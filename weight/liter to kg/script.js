let liter = document.querySelector('.Inputliter'),
     kg = document.querySelector('.InputKg');
     liter.addEventListener('input', function(){
          kg.value = `${liter.value * 0.970873786408}`
     }
     )
     kg.addEventListener('input', function(){
          liter.value = `${kg.value / 0.970873786408}`
     }
     )