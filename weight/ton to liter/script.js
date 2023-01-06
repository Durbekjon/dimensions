let ton = document.querySelector('.InputTon'),
     liter = document.querySelector('.InputLiter');
     ton.addEventListener('input', function(){
          liter.value = `${ton.value * 2831.6846592}`
     }
     )
     liter.addEventListener('input', function(){
          ton.value = `${liter.value / 2831.6846592}`
     }
     )