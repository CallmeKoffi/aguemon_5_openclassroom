//--------------Recuperation Id order--------------------
const orderId = localStorage.getItem('orderId');
console.log(orderId);
document.querySelector('#commandNumber').innerHTML = "# " + orderId;

//------------------Affichage prix total-------------------

const commandPrice = localStorage.getItem('totalprice');
document.querySelector('#commandPrice').innerHTML = formatPrice(commandPrice) ;
