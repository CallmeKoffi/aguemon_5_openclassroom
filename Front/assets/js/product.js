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
    //--------------Création variable récupération valeur dans LS-------------
         let productsInCart = JSON.parse(localStorage.getItem("products"));

    //------------------constante conserver produit dans LS-----------------------------
    const productInLs = () =>{
        productsInCart.push(cartChoice);
            localStorage.setItem("products", JSON.stringify(productsInCart));

    } 
    //-------------------fonction message après ajout panier--------------------
    function confirmMessage(){
        if (window.confirm("Votre produit à bien été ajouté au panier,Ok pour aller au panier ANNULER pour retouner à l'aaceuil")){
            window.location.href= '/Front/cart.html';
        }else{
            window.location.href= '/Front/index.html';
        }
    }     
    //-----------Condition de présence ou non d'article dans le panier-----------------

         if (productsInCart) {
            productInLs();
            confirmMessage();
            console.log(productsInCart) 
         } else {
             productsInCart = [];
             productInLs();
             confirmMessage();

             console.log(productsInCart)
             
             
         }
         }
    })
    ).catch(err => alert("Erreur : Vous n'etes pas sur le bon serveur "+ err))
    
    

        
    

