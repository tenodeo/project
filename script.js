const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

btns[0].style.backgroundColor = "cyan";
// console.log(btns[0].classList.add('red'));

btns[0].addEventListener('click', ()=>{
    // if(!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // }else{
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

wrapper.addEventListener('click', (event)=>{
    if(event.target && event.target.matches('button.red')){
        console.log('Hello');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);