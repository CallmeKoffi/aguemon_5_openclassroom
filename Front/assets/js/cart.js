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
    productDisplayInCart =
      productDisplayInCart +
      `
        
        <div class= "container_class-info" >
           <div >
              Nom article : ${productsInCart[i].name}
            
           </div>
           
           <div>
              Prix : ${productsInCart[i].price} €
           </div>

           

        </div>
        `;
  }

  //------------------Affichage produit--------------------------------------

  cartContainer.innerHTML = productDisplayInCart;
}
const removeAll = document.querySelector('.btn-remove-all');
removeAll.addEventListener('click', (e) => {
  e.preventDefault;
  //-----------------Vider le LS-------------
  localStorage.removeItem('products');

  //----------Alerte panier vide----------------------
  alert('Le panier est vide');
  //------------------Rechargement de la page------------------
  window.location.href = '/Front/cart.html';
});

//-------------------------------suppression article dans panier-----------------------
/*let btnTrash = document.querySelectorAll(".btn_remove");
console.log(btnTrash)*/

//---------------------------prix total du panier---------------------------
let totalPriceMath = [];
for (let j = 0; j < productsInCart.length; j++) {
  let priceItems = productsInCart[j].price;

  //---------------------insérer prix des article panier dans tableau pour calcul----------------

  totalPriceMath.push(priceItems);
}

//---------------Addition prix---------------------

const reducer = (previousValue, currentValue) => previousValue + currentValue;
let totalPrice = totalPriceMath.reduce(reducer,0);
console.log(totalPrice);

//-------------Affichage prix----------------------
const structurePriceHtml = `
<div class="container_total">
       Total : ${totalPrice} €
</div>`;

cartContainer.insertAdjacentHTML('beforeend', structurePriceHtml);
