//----------------------- declaration variable afin d'avoir mon LS actif sur page cart---------

//----------- variable  productsStorage qui contient les élément produits qui sont dans le LS-----
let productsStorage = JSON.parse(localStorage.getItem('products'));

//---------variable  productDisplayInCart qui est un tableau pour indexer les produits---------
let productDisplayInCart = [];

//---------creation constante qui prend le container panier----------

const cartContainer = document.querySelector('.container_cart');

//---------------------Affichage produit panier-----------------------------
displayCart();

//----------------------Suppression produit panier-------------------------
binBtn();

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
let totalPrice = totalPriceMath.reduce(reducer);

//-------------Affichage prix----------------------
const structurePriceHtml = `
<div class="container_total">
       Total : ${formatPrice(totalPrice)}
</div>`;

cartContainer.insertAdjacentHTML('beforeend', structurePriceHtml);


//-----------------affichage formulaire--------------------------

htmlFormCart();


//----------------------------------tableau des données formulaire----------------------------------

//------------pointage bouton foprmulaire--------------------
const btnForm = document.querySelector('#btn_form');



  //------------controle donnée entré dans le formulaire-----------

  
  let allForm = document.querySelector('#Form');
  console.log(allForm);

  const emailsubmit = () => {
    allForm.addEventListener('submit',(e)=>{
      let emaiInput = document.querySelector('#email');
      let regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      
      let infoInput = document.querySelectorAll('.info');
      let regExpInfo = "/^[a-zA-Z,.'-]+$/u"
      if(emaiInput.value =="" || infoInput.value =="" ){
        e.preventDefault();
        
      }else if(regExpInfo.test(infoInput.value) === false ){
        e.preventDefault();
        console.log(regExpInfo.test(infoInput.value));

      }
    })
  }
   
  // ------------implantation des valeurs du formulaire dans un objet---------------
  
  orderSubmit();
  
