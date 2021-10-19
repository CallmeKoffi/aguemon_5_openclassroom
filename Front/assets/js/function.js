// Index page fonction

const fetchDisplayAllProducts = () => {
  fetch('http://localhost:3000/api/cameras').then((res) =>
    res
      .json()
      .then((data) => {
        data.forEach((product) => {
          var clone = document
            .querySelector('#clone_product')
            .content.cloneNode(true);
          clone
            .querySelector('.zoomcard')
            .setAttribute('href', './productpage.html?id=' + product._id);
          clone
            .querySelector('.product_picture')
            .setAttribute('src', product.imageUrl);
          clone.querySelector('.title_product').innerHTML = product.name;
          clone.querySelector('.price_product').innerHTML = formatPrice(
            product.price
          );
          clone.querySelector('.decription__product').innerHTML =
            product.description;
          productsBody.appendChild(clone);
        });
      })
      .catch((err) => alert('Erreur ' + err))
  );
};

// Product Page fonction
/**
 * fonc tion fetch qui récup§re information des produits stocké dans l(api--------------)
 */

const fetchDataProduct = () => {
  fetch(urlcamera)
    .then((res) =>
      res.json().then((product) => {
        document
          .querySelector('#container__product--image')
          .setAttribute('src', product.imageUrl);
        document.querySelector('#name').innerHTML = product.name;
        document.querySelector('#price').innerHTML = formatPrice(product.price);
        document.querySelector('#description').innerHTML = product.description;
        //----------------------fonction affichage toute options produit---------------------------
        fillSelect(product.lenses);

        //---------------------écoute évènement clic sur bouton d'ajout panier-------------------
        document
          .querySelector('#add_to_cart')
          .addEventListener('click', addToCart);

        // -----------Choice of lenses option nfor product---------------

        //----------- Fonction récupération donnée choisis par utilisateur----------------

        function addToCart(e) {
          let cartChoice = {
            name: product.name,
            price: product.price,
            lense: product.select,
            quantity: 1,
            id: product._id,
          };

          //--------------Création variable récupération valeur dans LS-------------

          let productsInCart = JSON.parse(localStorage.getItem('products'));

          //------------------constante conserver produit dans LS----------------------------

          const productInLs = () => {
            productsInCart.push(cartChoice);
            localStorage.setItem('products', JSON.stringify(productsInCart));
          };
          //-------------------fonction message après ajout panier--------------------

          function confirmMessage() {
            if (
              window.confirm(
                "Votre produit à bien été ajouté au panier,Ok pour aller au panier ANNULER pour retouner à l'aaceuil"
              )
            ) {
              window.location.href = '/Front/cart.html';
            } else {
              window.location.href = '/Front/index.html';
            }
          }
          //-----------Condition de présence ou non d'article dans le panier-----------------

          if (productsInCart) {
            productInLs();
            confirmMessage();
            console.log(productsInCart);
          } else {
            productsInCart = [];
            productInLs();
            confirmMessage();

            console.log(productsInCart);
          }
        }
      })
    )
    .catch((err) =>
      alert("Erreur : Vous n'etes pas sur le bon serveur " + err)
    );
};

/**
 * fonction donnant les options de chaque produits
 * @param {*} lenses
 */
function fillSelect(lenses) {
  let select = document.querySelector('#option__produit');
  let index = 0;
  for (let lense of lenses) {
    let option = document.createElement('option');
    option.value = index;
    option.innerHTML = lense;
    select.appendChild(option);
    index++;
  }
}

/**
 * Fonction qui format le prix
 * @param {integer} price
 * @returns string
 */
function formatPrice(price) {
  return Number.parseFloat(price / 100).toFixed(2) + ' €';
}

//----------création message quand panier vide-------------

/**
 * Si il n'ya pas de données dans le LS afficher panier vide , retour à l'acceuil
 */
const displayCart = () => {
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
                  Prix : ${formatPrice(productsStorage[i].price)}
               </div>
    
            </div>
            `;
    }

    //------------------Affichage produit--------------------------------------

    cartContainer.innerHTML = productDisplayInCart;
  }
};

const binBtn = () => {
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
};

//----------------------- installation formulaire dynamiquement------------------

const htmlFormCart = () => {
  //------------ selection form dans le dom-------------

  const cartFormPosition = document.querySelector('.container_cart');

  //------------------formulaire-------------

  const elementInForm = `
    <form action="" method="POST" id="Form">
        <h3>Formulaire</h3>
  
        <div class="form_field">
          <label for="firstName">Entrer votre prénom : </label>
          <input type="text" name="firstName" required id="firstName" class="info" >
          <small></small>
        </div>
  
        <div class="form_field">
          <label for="lasttName">Entrer votre nom : </label>
          <input type="text" name="lastName" id="lastName" class="info" required>
          <small></small>
        </div>
  
        <div class="form_field">
          <label for="address">Entrer votre adresse : </label>
          <textarea name="address" id="address" class="info" required></textarea>  
          <small></small>
        </div>
  
        <div class="form_field">
          <label for="city">Entrer votre ville : </label>
          <input type="text" name="city" id="city" class="info" required>
          <small></small>
        </div>
  
        <div class="form_field">
          <label for="email">Entrer votre email: </label>
          <input type="text" name="email" required="true" id="email" >
          <small></small>
        </div>
  
        <div class="form_field">
          <input type="submit" name="submit" value="Commandez" id = "btn_form">
        </div>
  
    </form>
    `;

  //----------------------insertion ligne html--------------------
  cartFormPosition.insertAdjacentHTML('afterend', elementInForm);
};

/**
 * 
 * @param {*} inputEmail 
 */

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    '/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/',
    'gm'
  );
  let testEmail = emailRegExp.test(inputEmail.value);
  let small = inputEmail.nextElementSibling;
  console.log(testEmail);
  if (testEmail) {
    small.innerHTML = 'Adresse valide';
    return true;
  }else{
    small.innerHTML = 'Adresse non-valide';
    return false;
  }
};
const validInfo = function (inputName) {
  let infoRegExp = new RegExp(
    '/[a-zA-Z-/]{2,16}$/',
    'gm'
  );
  let testInfo = infoRegExp.test(inputName.value);
  let small = inputName.nextElementSibling;
  
  if (testInfo) {
    small.innerHTML = 'valide';
    return true;
  }else{
    small.innerHTML = 'non-valide';
    return false;
  }
}


/**
 * Envoi information au server pour compléter la commande
 *
 */
const orderSubmit = () => {
  btnForm.addEventListener('click', (e) => {
    e.preventDefault();
    let contact = {
      firstName: document.querySelector('#firstName').value,
      lastName: document.querySelector('#lastName').value,
      address: document.querySelector('#address').value,
      city: document.querySelector('#city').value,
      email: document.querySelector('#email').value,
    };

    //--------------------Récupération données formulaire et prix pour LS------------------------
    localStorage.setItem('contact', JSON.stringify(contact));
    localStorage.setItem('totalprice', JSON.stringify(totalPrice));

    //------------Création objet qui contient produits et contact client-----------------
    /**
     *
     */
    const products = productsStorage.map((product) => product.id);

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
        console.log(dataContent);
        if (response.ok) {
          localStorage.setItem('orderId', dataContent.orderId);
          localStorage.removeItem('products');
          window.location.href = '/Front/confirmationPage.html';
        } else {
          alert(`Erreur : Remplir le formulaire ${response.status}`);
        }
      } catch (e) {}
    });
  });
};
