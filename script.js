// let btn = document.querySelector('#btn_1');
// let input = document.querySelector('.input');
// btn.addEventListener('click',function(){
//     input.classList.toggle('show')
// })
let btn = document.querySelector('#btn_3');
btn.addEventListener('click',function(){
    const newOpen = document.querySelector('.login_form')
    newOpen.classList.toggle('active')
})
const faq = document.querySelectorAll('.faq')
faq.forEach((faqs)=>{
    faqs.addEventListener('click',function(){
        faqs.classList.toggle('open')

        const icons = faqs.querySelector('.icon-faq i')
        if(icons.className==="icon-plus"){
            icons.className ="icon-minus"
        } else{
            icons.className ="icon-plus" 
        }
    })
})