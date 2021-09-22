
/**
 * Fonction qui format le prix
 * @param {integer} price 
 * @returns string
 */
function formatPrice(price){
    return Number.parseFloat(price/100).toFixed(2) + " €";
}