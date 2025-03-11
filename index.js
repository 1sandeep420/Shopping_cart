document.addEventListener('DOMContentLoaded',()=>
    {
    const Bars = document.getElementById('Bars')
    const After_effect = document.getElementById('After')
    const Close_effect = document.getElementById('close')
    const Products = document.getElementById('products')
    const Catageory_select=document.getElementsByClassName('Catageory_main_1')[0]
    //since we are using same js file for both the pages the elemnts are not there in the page so we 
    //we need to verify those elemets are present 
    console.log(Catageory_select)
    if(Bars&&After_effect&&Close_effect)
    {
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
    }
    
    //Just to ensure the element is present in that page if it 1 page it exceutes with 1 page if it is 2 page it exceutes with 2 page
    
    //filtering women 
    if(Catageory_select)
    {
        Catageory_select.addEventListener('click',(e)=>
            {
                console.log(e.target)
                const item=e.target;
                if( item.classList.contains('Women'))
                {
                    localStorage.setItem('selectedCategory', 'Women');
                    window.location.href = 'Products.html';  
                };

                if( item.classList.contains('Cosmetics'))
                {
                        localStorage.setItem('selectedCategory', 'Cosmetics');
                        window.location.href = 'Products.html'; 
                };
                if( item.classList.contains('Electronics'))
                    {
                            localStorage.setItem('selectedCategory', 'Electronics');
                            window.location.href = 'Products.html'; 
                    };

                if( item.classList.contains('Shoes'))
                        {
                                localStorage.setItem('selectedCategory', 'Shoes');
                                window.location.href = 'Products.html'; 
                        };

             
            })       
    }
    
    
    
    
    })