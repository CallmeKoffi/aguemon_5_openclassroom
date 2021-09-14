// Constante
const idProduct = (new URL(document.location)).searchParams.get("id")
const urlcamera = ' http://localhost:3000/api/cameras/' + idProduct
//--------------------fetch contact api camera----------------

fetch(urlcamera).then((res) => 
res.json().then((product) => {
    
     document.querySelector('#container__product--image').setAttribute("src", product.imageUrl);
     document.querySelector('#name').innerHTML = product.name;
     document.querySelector('#price').innerHTML = product.price / 100 + " €";
     document.querySelector('#description').innerHTML = product.description;
   
     fillSelect(product.lenses)
     document.querySelector("#add_to_cart").addEventListener("click",addToCart)

// -----------Choice of lenses option nfor product---------------
         function fillSelect(lenses){
            let select = document.querySelector('#option__produit');
            let index = 0;
            for (let lense of lenses){
                let option = document.createElement('option');
                option.value= index;
                option.innerHTML = lense;
                select.appendChild(option);
                index ++;
            }
        }
//----------- Fonction récupération donnée choisis par utilisateur----------------

     function addToCart(e){
        let cartChoice = {
            name : product.name,
            price : product.price / 100,
            lense : product.select,
            quantity : 1
 
            
        }
         //console.log(cartChoice)
         let productsInCart = JSON.parse(localStorage.getItem(products));
         console.log(productsInCart)
         /*if (productsInCart) {
             
         } else {
             
             
         }*/
         }
    })
    ).catch(err => alert("Erreur : Vous n'etes pas sur le bon serveur "+ err))

    //localStorage.removeItem('colorSetting', '#a4509b');
    /*function cart() {
        var currentColor = localStorage.getItem('bgcolor');
        var currentFont = localStorage.getItem('font');
        var currentImage = localStorage.getItem('image');
      
        document.getElementById('bgcolor').value = currentColor;
        document.getElementById('font').value = currentFont;
        document.getElementById('image').value = currentImage;*/

    
    

        
    

