// -------------Constante ID produit individuel--------------

const idProduct = new URL(document.location).searchParams.get('id');

//-------------- Constante URL produit individuel-----------------

const urlcamera = ' http://localhost:3000/api/cameras/' + idProduct;

//--------------------fetch contact api camera----------------

fetchDataProduct();

