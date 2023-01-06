let liter = document.querySelector('.Inputliter'),
     gr = document.querySelector('.InputGr');
     liter.addEventListener('input', function(){
          gr.value = `${liter.value * 930}`
     }
     )
     gr.addEventListener('input', function(){
          liter.value = `${gr.value / 930} `
     }
     )