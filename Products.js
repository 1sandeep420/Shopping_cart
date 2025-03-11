document.addEventListener('DOMContentLoaded', ()=>
    {
    
        const Products = document.getElementById('products')
        const Catageory_select=document.getElementById('Categories')
        const selectedCategory = localStorage.getItem('selectedCategory');
        const Product = document.getElementById('product_image')
        const IMages = document.getElementById('Images');
    
         
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
        
            console.log(selectedCategory)
        
            //filtering the women products
          ///  Data();
            
            Data().then((Data)=>
            {
                if(Data)
                {
                    for(let i=0;i<Data.length;i++)
                    {
                        const Filter_products = Data[i].Category
                        console.log(Filter_products)
                        if(Filter_products === selectedCategory)
                        {
                            Products.innerText=Data[i].Category;
                            Products.innerText=Data[i].name;
    //creating a div and appending the image 
                            const Preview = document.createElement('img')
                            console.log(Preview.src=Data[i].img);
                            IMages.append(Preview)
    
    
                            Products.innerText=Data[i].text;
        
                        }
                       
                        console.log(Filter_products,i)
        
                    }
                 
                }
            })
        
        }
        
    
    })