
/**
 * Fonction qui format le prix
 * @param {integer} price 
 * @returns string
 */
function formatPrice(price){
    return Number.parseFloat(price/100).toFixed(2) + " €";
}

/**
 * Fonction verification Email
 */
 
const validEmail = function(inputEmail){
    let emailRegExp = new RegExp ("/^[a-zA-Z0-9.-_]+[@]{1}+[a-zA-Z0-9.-_]+[.]{1}+[a-z]{2,10}$/", 'g') ;
  
    let testEmail = emailRegExp.test(inputEmail.value);
    console.log(testEmail);

}
/*const validName = function(inputName){
    let nameRegExp = new RegExp(
      /^[a-z]{2,10}$/
      );
  
    let testName = nameRegExp.test(inputName.value);
    
  if (validName) {
      return true;
      window.location.href= '/Front/confirmation.html';
  } else {
      return false;
      
  }
    }*/

     //----------- Fonction récupération donnée choisis par utilisateur----------------

     