const Bars = document.getElementById('Bars')
const After_effect = document.getElementById('After')
const Close_effect = document.getElementById('close')
Bars.addEventListener('click',()=>
{
    After_effect.classList.toggle('active')

    
})

Close_effect.addEventListener('click' , ()=>
{
    After_effect.classList.remove('active')
    console.log('clicked')
    document.body.style.backgroundColor = '';

})