//----------------------- declaration variable afin d'avoir mon LS actif sur page cart---------

let productsInCart = JSON.parse(localStorage.getItem('products'));
let productDisplayInCart = [];
//---------creation constante qui prend le container panier----------

const cartContainer = document.querySelector('.container_cart');

//----------création message quand panier vide-------------

if (productsInCart === null) {
  const msgEmpty = `
     <div class="container_cart_empty">
        <div>
            Le panier est Vide. <a href="/Front/index.html">Retournez à l'acceuil.</a>
        </div>

    </div>`;
  cartContainer.innerHTML = msgEmpty;
  //---------------implantation produit choisis dans le containeur-------------
  
} else {
  
  for (let i = 0; i < productsInCart.length; i++) {
    productDisplayInCart = productDisplayInCart + `
        
        <div class= "container_class-info" >
           <div >
              Nom article : ${productsInCart[i].name}
            
           </div>
           
           <div>
              Prix : ${productsInCart[i].price} €
           </div>

           <div>
              <button> <i class="fas fa-trash-alt"></i> </button>
           </div>

        </div>
        `;
      
  }
  cartContainer.innerHTML = productDisplayInCart;
}
