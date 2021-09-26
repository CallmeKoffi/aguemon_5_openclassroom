//----------------------- declaration variable afin d'avoir mon LS actif sur page cart---------

//----------- variable  productsStorage qui contient les élément produits qui sont dans le LS-----
let productsStorage = JSON.parse(localStorage.getItem('products'));

//---------variable  productDisplayInCart qui est un tableau pour indexer les produits---------
let productDisplayInCart = [];

//---------creation constante qui prend le container panier----------

const cartContainer = document.querySelector('.container_cart');

//----------création message quand panier vide-------------

/**
 * Si il n'ya pas de données dans le LS afficher panier vide , retour à l'acceuil
 */

if (productsStorage === null) {
  const msgEmpty = `
     <div class="container_cart_empty">
        <div>
            Le panier est Vide. <a href="/Front/index.html">Retournez à l'acceuil.</a>
        </div>

    </div>`;
  cartContainer.innerHTML = msgEmpty;

  //---------------implantation produit choisis dans le containeur-------------

  /**
   * Sinon indexer le tableau de qui contient les produits
   * et les afficher avec nom du produit et prix
   */

} else {
  for (let i = 0; i < productsStorage.length; i++) {
    productDisplayInCart =
      productDisplayInCart +
      `
        
        <div class= "container_class-info" >
           <div >
              Nom article : ${productsStorage[i].name}
            
           </div>
           
           <div>
              Prix : ${productsStorage[i].price} €
           </div>

        </div>
        `;
  }

  //------------------Affichage produit--------------------------------------

  cartContainer.innerHTML = productDisplayInCart;
}
/**
 * constante qui target le bouton corbeille de la page cart 
 */
const removeAll = document.querySelector('.btn-remove-all');

/**
 * Fonction addeventlistener pour écouter le click sur le bouton corbeille et vider 
 * le localstorage 
 */
removeAll.addEventListener('click', (e) => {
  e.preventDefault;
  //-----------------Vider le LS-------------
  localStorage.removeItem('products');

  //----------Alerte panier vide----------------------
  alert('Le panier est vide');
  //------------------Rechargement de la page------------------
  window.location.href = '/Front/cart.html';
});

//---------------------------------------prix total du panier-----------------------------------------

/**
   * créer un tableau totalPriceMath
   * faire une boucle pour stocker chaque prix des produits dans vriable
*/
let totalPriceMath = [];
for (let j = 0; j < productsStorage.length; j++) {
  let priceItems = productsStorage[j].price;

  /**
   * insérer prix des article panier dans tableau pour calcul
   */

  totalPriceMath.push(priceItems);
}

/**
 * Fonction qui additionne tout les prix
 * @param {any} previousValue 
 * @param {any} currentValue 
 * @returns string
 */

const reducer = (previousValue, currentValue) => previousValue + currentValue;
let totalPrice = totalPriceMath.reduce(reducer, 0);

//-------------Affichage prix----------------------
const structurePriceHtml = `
<div class="container_total">
       Total : ${totalPrice} €
</div>`;

cartContainer.insertAdjacentHTML('beforeend', structurePriceHtml);

//----------------------- installation formulaire dynamiquement------------------

const htmlFormCart = () => {
  //------------ selection form dans le dom-------------

  const cartFormPosition = document.querySelector('.container_cart');

  //------------------formulaire-------------

  const elementInForm = `
  <form action="" method="POST" id="loginForm">
      <h3>Formulaire</h3>

      <div class="form_field">
        <label for="firstName">Entrer votre prénom : </label>
        <input type="text" name="firstName" required id="firstName" >
      </div>

      <div class="form_field">
        <label for="lasttName">Entrer votre nom : </label>
        <input type="text" name="lastName" id="lastName" required>
      </div>

      <div class="form_field">
        <label for="address">Entrer votre adresse : </label>
        <textarea name="address" id="address" required></textarea>  
      </div>

      <div class="form_field">
        <label for="city">Entrer votre ville : </label>
        <input type="text" name="city" id="city" required>
      </div>

      <div class="form_field">
        <label for="email">Entrer votre email: </label>
        <input type="text" name="email" required id="email" >
      </div>

      <div class="form_field">
        <input type="submit" name="submit" value="Commandez" id = "btn_form">
      </div>

    </form>
  `;

  //----------------------insertion ligne html--------------------
  cartFormPosition.insertAdjacentHTML('afterend', elementInForm);
};

//-----------------affichage formulaire--------------------------

htmlFormCart();

//------------controle donnée entré dans le formulaire-----------

let formControl = document.querySelector('#loginForm');
//console.log(formControl);

const firstNameinput = formControl.firstName;



//------------Fin controle donnée entré dans le formulaire-----------
//----------------------------------tableau des données formulaire----------------------------------

//------------pointage bouton foprmulaire--------------------
const btnForm = document.querySelector('#btn_form');
//---------------------------Event bouton formulaire--------------
/**
 * 
 */

btnForm.addEventListener('click', (e) => {
  e.preventDefault();
  
  let contact = {
    firstName: document.querySelector('#firstName').value,
    lastName: document.querySelector('#lastName').value,
    address: document.querySelector('#address').value,
    city: document.querySelector('#city').value,
    email: document.querySelector('#email').value,
  };

  //--------------------Récupération données formulaire pour LS------------------------
  localStorage.setItem('contact', JSON.stringify(contact));
  localStorage.setItem('totalprice', JSON.stringify(totalPrice));

  //------------Création objet qui contient produits et contact client-----------------
  /**
   * 
   */
  const products = productsStorage.map(product => product.id);
  //console.log(products)
  const dataSend = {
    products,
    contact,
  };
 
  //-------------envoi des données récupéré au server via fetch POST--------------
  /**
   * 
   */
  
    const promise = fetch('http://localhost:3000/api/cameras/order', {
    method: 'POST',
    body: JSON.stringify(dataSend),
    headers: {
      'content-type': 'application/JSON',
    },
  });
  promise.then(async (response) => {
    try {
      const dataContent = await response.json();
      console.log(dataContent)
         if (response.ok) {
           console.log("id response");
           console.log(dataContent.orderId);

           localStorage.setItem('orderId', dataContent.orderId);
           
           window.location.href = '/Front/confirmationPage.html';
         } else {
           alert (`Problème avec le serveur : Erreur ${response.status}`)
         }
    }
      catch (e) {}
    
  });
  
  
});