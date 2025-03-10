document.addEventListener('DOMContentLoaded',()=>
{
const Bars = document.getElementById('Bars')
const After_effect = document.getElementById('After')
const Close_effect = document.getElementById('close')
const Products = document.getElementById('products')
const Catageory_select=document.getElementById('Categories')
//since we are using same js file for both the pages the elemnts are not there in the page so we 
//we need to verify those elemets are present 

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




if(Products)    //iam using this in products page
{
//Handling response
const Data = async()=>
    {
        try
        {
            const response =  await fetch('data.json');
            const Data = await response.json();
            console.log(Data);
            return Data;    
        }
        catch(error)
        {
            console.log('errror ocuuured fetching data ', error)
        }
    }


    //filtering the women products
  ///  Data();
    
    Data().then((Data)=>
    {
        if(Data)
        {
            for(let i=0;i<Data.length;i++)
            {
                const Filter_products = Data[i].Category
                if(Filter_products === 'Women products')
                {
                    Products.innerText=Data[i].Category+`${i}`;

                }
               
                console.log(Filter_products,i)

            }
         
        }
    })

}


//filtering women 

if(Catageory_select)
{
    Catageory_select.addEventListener('click',(e)=>
        {
            console.log(e.target)
            const item=e.target;
            if(item.classList.contains('Women'))
            {
                console.log('women')
            }
        })       
}




})
