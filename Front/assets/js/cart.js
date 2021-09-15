//----------------------- declaration variable afin d'avoir mon LS actif sur page cart---------

let productsInCart = JSON.parse(localStorage.getItem("products"));


//---------creation constante qui prend le container panier----------

const cartContainer = document.querySelector('.container_cart');

//----------création message quand panier vide-------------

if (productsInCart === null) {
    const msgEmpty = `
     <div class="container_cart_empty">
        <div>
            Le panier est <a href="/Front/index.html">Vide</a>
        </div>

    </div>` ;
    cartContainer.innerHTML = msgEmpty;
//---------------implantation produit choisis dans le containeur-------------

} else {
   let productDisplayInCart = [];
   for (let i = 0; i < productsInCart.length; i++) {
       console.log(productsInCart)
       
   }


}